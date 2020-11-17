import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { useFonts, Righteous_400Regular } from '@expo-google-fonts/righteous';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import Readings from "./Readings";
import History from "./Histroy";
import { Dimensions } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const getFonts = () =>
  Font.loadAsync({
    Righteous: require("../assets/fonts/Righteous-Regular.ttf"),
  });

export default function Profile({ route, navigation }) {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  const [patientName, setPatientName] = useState("Loading....");
  const [patientAge, setPatientAge] = useState("Loading....");
  const [patientGender, setPatientGender] = useState("Loading....");
  const [patientDate, setPatientDate] = useState("Loading....");
  const [patientHR, setPatientHR] = useState("Loading....");
  const [patientTemp, setPatientTemp] = useState("Loading....");
  const [patientBPsys, setPatientBPsys] = useState("Loading....");
  const [patientBPdiast, setPatientBPdiast] = useState("Loading....");
  const [patientSpO2, setPatientSpO2] = useState("Loading....");
  const [patientAddress, setPatientAddress] = useState("Loading....");
  const [patientSeed, setPatientSeed] = useState('');
  const [patientDeviceID, setPatientDeviceID] = useState("Loading....");
  const [spinnerText, setSpinnerText] = useState("Fetching From IOTA...\nPlease Wait...")
  const [hasLastTx, setHasLastTx] = useState(false);
  const [lastTx, setLastTx] = useState([0, 0, 0, 0]);
  const [lastNotif, setLastNotif] = useState({now: 0});
  const [lastPresc, setLastPresc] = useState({now: 0});
  const [notifFinished, setNotifFinished] = useState(false);
  const [prescFinished, setPrescFinished] = useState(false);
  const [finished, setFinished] = useState(false);
  const [online, setOnline] = useState("Checking Device Status....")
  const [boolOnline, setBoolOnline] = useState(0);

  // Last Prescription States
  const[prescTitle, setPrescTitle] = useState("Loading... Please Wait...")
  const[prescDetails, setPrescDetails] = useState("Loading... Please Wait...")
  const[prescTime, setPrescTime] = useState("Loading... Please Wait...")

  // Last Notification States
  const[notifTitle, setNotifTitle] = useState("Loading... Please Wait...")
  const[notifDetails, setNotifDetails] = useState("Loading... Please Wait...")
  const[notifTime, setNotifTime] = useState("Loading... Please Wait...")


  var maxWidth = Dimensions.get("window").width;
  var PrescArray = [];
  var NotificationArray = [];
  var HistoryArray = []
  var lastPrescVar = false;

  useEffect(() => {
    (async () => {
      try {
        const { info } = route.params;
        // Alert.alert(JSON.stringify(info))
        // console.log(info)
        setPatientName(info.Profile.name.toString());
        setPatientAge(info.Profile.age.toString());
        setPatientGender(info.Profile.gender.toString());
        setPatientDate(info.Profile.date.toString());
        setPatientSeed(info.SEED.toString())
        setPatientAddress(info.ADDRESS.toString());
        setPatientDeviceID(info.ID.toString());

        var response = await fetch(
          `https://thetamiddleware.herokuapp.com/getLastTx/${info.ADDRESS}&vitals`
        );

        var resObj = await response.json();
        console.log("Last TX ", resObj)
        if (resObj !== false) {
          var responseTx = await fetch(
            `https://thetamiddleware.herokuapp.com/getTx/${resObj}`
          );
          var resObjTx = await responseTx.json();
          // resObjTx = JSON.parse(resObjTx["response"]);
          console.log(resObjTx.response.HR)

          // Alert.alert(JSON.stringify(resObjTx))
          setPatientHR(resObjTx.response.HR.toString());
          setPatientTemp(resObjTx.response.Temp.toString());
          setPatientSpO2(resObjTx.response.SpO2.toString())
          // setPatientBPsys(resObjTx.BP.systolic.toString());
          // setPatientBPdiast(resObjTx.BP.diastolic.toString());
          setLastTx([resObjTx.response.HR, resObjTx.response.Temp, resObjTx.response.SpO2]);
          setHasLastTx(true);
          setFinished(true);
        }
        // alert("Finished")
        else {
          setPatientHR("N/A");
          setPatientTemp("N/A");
          setPatientSpO2("N/A");
          // setPatientBPsys("N/A");
          // setPatientBPdiast("N/A");
          setFinished(true);
        }

        var checkOnline = await fetch(
          `https://thetamiddleware.herokuapp.com/getLastTx/${info.ADDRESS}&deviceLog`
        );
        checkOnline = await checkOnline.json();
        if(checkOnline !== false){
          var logTx = await fetch(
            `https://thetamiddleware.herokuapp.com/getTx/${checkOnline}`
          );
          var onlineStatus = await logTx.json();
          // onlineStatus = JSON.parse(onlineStatus);
          // Alert.alert(JSON.stringify(onlineStatus))
          onlineStatus.response.LogType == 1 ? setBoolOnline(1) : setBoolOnline(0)
          onlineStatus.response.LogType == 1 ? setOnline("Your Device is ONLINE") : setOnline("Your Device is OFFLINE")
        }
        else{
          setBoolOnline(2)
          setOnline("Patient's Device Status is Unknown")
        }

        var prescHash = await fetch(
          `https://thetamiddleware.herokuapp.com/getLastTx/${info.ADDRESS}&prescription`
        );
        prescHash = await prescHash.json();

        if(prescHash !== false){
          var logTx = await fetch(
            `https://thetamiddleware.herokuapp.com/getTx/${prescHash}`
          );
          var prescData = await logTx.json();
          // prescData = JSON.parse(prescData);
          setPrescTitle(prescData.response.PrescriptionName)
          setPrescDetails(prescData.response.PrescriptionDetails)
          setPrescTime(prescData.response.TimeStamp)
          // setLastPresc({...lastPresc, now:{prescData}})
          // setPrescFinished(true)
          // console.log("Prescription Data", lastPresc)
        }
        else{
          setPrescTitle("Not Found...")
          setPrescDetails("Not Found...")
          setPrescTime("Not Found...")
          console.log("No Last Prescription")
        }

        var notifHash = await fetch(
          `https://thetamiddleware.herokuapp.com/getLastTx/${info.ADDRESS}&docNotification`
        );
        notifHash = await notifHash.json();

        if(notifHash !== false){
          var logTx = await fetch(
            `https://thetamiddleware.herokuapp.com/getTx/${notifHash}`
          );
          var notifData = await logTx.json();
          // notifData = JSON.parse(notifData);

          setNotifTitle(notifData.response.NotificationTitle)
          setNotifDetails(notifData.response.NotificationDetails)
          setNotifTime(notifData.response.TimeStamp)
          // setLastNotif({...lastNotif, now: {notifData}})
          // setNotifFinished(true)
          // console.log("Notification Data", lastNotif)
        }
        else{
          setNotifTitle("Not Found...")
          setNotifDetails("Not Found...")
          setNotifTime("Not Found...")
          console.log("No Last Notification")
        }


      } catch (e) {
        setFinished(true);
        console.log(e)
        Alert.alert("Error has Ocurred", JSON.stringify(e));
      }
      // Alert.alert(JSON.stringify(info))
    })();
  }, []);

  const handlePrescription = async () => {
    try{
      setFinished(false)
      const address = patientAddress;
      // setHistState(spinnierText)
  setSpinnerText('Fetching Hashes of Prescriptions\nPlease Wait...')

  var response = await fetch(`https://thetamiddleware.herokuapp.com/getAllHash/${address.toString()}&08-11-2020&prescription`);
  var resObj = await response.json();
  // Alert.alert("All Hashes", JSON.stringify(resObj.length));
  // setHashArray(resObj)
  setSpinnerText('Fetching Prescriptions from IOTA\nPlease Wait...')
  for(var i=0; i<resObj.length; i++)
  {
    var responseTx = await fetch(`https://thetamiddleware.herokuapp.com/getTx/${resObj[i].toString()}`);
  var resObjTx = await responseTx.json();
  // var parsed = JSON.parse(resObjTx)
    PrescArray.push(resObjTx.response)

  }
  setFinished(true)
  navigation.navigate('Prescriptions', {data: PrescArray})

    }
    catch(e){
      setFinished(true)
      console.log("Error Occurred ", e)
    }
  };

  const handleNotifications = async () => {
    try{
      setFinished(false)
      const address = patientAddress;
      // setHistState(spinnierText)
  setSpinnerText('Fetching Hashes of Notifications\nPlease Wait...')

  var response = await fetch(`https://thetamiddleware.herokuapp.com/getAllHash/${address.toString()}&08-11-2020&docNotification`);
  var resObj = await response.json();
  // Alert.alert("All Hashes", JSON.stringify(resObj.length));
  // setHashArray(resObj)
  setSpinnerText('Fetching Notifications from IOTA\nPlease Wait...')
  for(var i=0; i<resObj.length; i++)
  {
    var responseTx = await fetch(`https://thetamiddleware.herokuapp.com/getTx/${resObj[i].toString()}`);
  var resObjTx = await responseTx.json();
  // var parsed = JSON.parse(resObjTx)
    NotificationArray.push(resObjTx.response)

  }
  setFinished(true)
  navigation.navigate('Notifications', {data: NotificationArray})

    }
    catch(e){
      setFinished(true)
      console.log("Error Occurred ", e)
    }
  };

  const handleHistory = async () => {
    try{
      setFinished(false)
      const address = patientAddress;
      // setHistState(spinnierText)
  setSpinnerText('Fetching History Hashes\nPlease Wait...')

  var response = await fetch(`https://thetamiddleware.herokuapp.com/getAllHash/${address.toString()}&08-11-2020&vitals`);
  var resObj = await response.json();
  // Alert.alert("All Hashes", JSON.stringify(resObj.length));
  // setHashArray(resObj)
  setSpinnerText('Fetching History from IOTA\nPlease Wait...')
  for(var i=0; i<resObj.length; i++)
  {
    var responseTx = await fetch(`https://thetamiddleware.herokuapp.com/getTx/${resObj[i].toString()}`);
  var resObjTx = await responseTx.json();
  // var parsed = JSON.parse(resObjTx)
  HistoryArray.push(resObjTx.response)

  }
  setFinished(true)
  navigation.navigate('HistoryCards', {data: HistoryArray})

    }
    catch(e){
      setFinished(true)
      console.log("Error Occurred ", e)
    }
  };


  let [fontsLoaded] = useFonts({
    // Load a font `Montserrat` from a static resource
    'Righteous': require('./../assets/fonts/Righteous-Regular.ttf'),
        'Secular': require('./../assets/fonts/SecularOne-Regular.ttf'),
        'Nunito': require('./../assets/fonts/Nunito-Regular.ttf'),
        'Poppins': require('./../assets/fonts/Poppins-Regular.ttf'),
        'NunitoBold': require('./../assets/fonts/Nunito-Bold.ttf'),
        'PoppinsBold': require('./../assets/fonts/Poppins-Bold.ttf'),
        'NunitoBlack': require('./../assets/fonts/Nunito-Black.ttf'),
        'PoppinsBlack': require('./../assets/fonts/Poppins-Black.ttf'),
        'MetropolisBlack': require('./../assets/fonts/Metropolis-Black.otf'),
        'MetropolisBold': require('./../assets/fonts/Metropolis-Bold.otf'),
        'MetropolisSemiBold': require('./../assets/fonts/Metropolis-SemiBold.otf'),
        'Metropolis': require('./../assets/fonts/Metropolis-Regular.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (
    <View style={styles.container}>
      <Spinner
        visible={!finished}
        textStyle={styles.spinnerText}
        textContent={spinnerText}
      />

      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>

        <Card.Title>
          <Text style={[styles.text, { color:'white', fontWeight: "900", fontSize: 36, fontFamily:'Righteous' }]}>
            {patientName}
          </Text>
        </Card.Title>
        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.text,
              {color: '#F1C40F', fontFamily:'MetropolisBlack',fontSize: 20, marginBottom: 10 },
              boolOnline == 1 ? styles.statusOnline : styles.statusOffline
            ]}
          >
            {online}
          </Text>
        </View>
        <Card.Divider />


        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 20 }]}>Age</Text>
            <Text style={[styles.text, styles.subText]}>{patientAge}</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 2,
                borderRightWidth: 2,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 20 }]}>Gender</Text>
            <Text style={[styles.text, styles.subText]}>
              {patientGender.toUpperCase()}
            </Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 20 }]}>Admitted</Text>
            <Text style={[styles.text, styles.subText]}>{patientDate}</Text>
          </View>
        </View>

        <Card.Divider />
        <View style={styles.buttonContainer}>
          <Button
            title="Live Readings"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonText}
            style={{ width: 150, marginRight: 10 }}
            onPress={
              () =>
              navigation.navigate("LiveReadings", { seed: patientSeed , address: patientAddress })
            }
          ></Button>
          <Button
            style={{ width: 150, marginLeft: 10 }}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonText}
            title="View History"
            onPress={
              () =>
              navigation.navigate("History", { address: patientAddress })
            }
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Prescriptions"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonText}
            style={{ width: 150, marginRight: 10 }}
            onPress={handlePrescription}
          ></Button>
          <Button
            style={{ width: 150, marginLeft: 10}}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonText}
            title="Notifications"
            onPress={handleNotifications}
          ></Button>
        </View>

        <Card.Divider />
        <Card containerStyle={styles.card}>
          <Card.Title>
            <Text style={[styles.text, { color: "white", fontSize: 20 }]}>
              Last Readings
            </Text>
          </Card.Title>

          <View>
            {/* Bar Chart Starts From Here */}

            <BarChart
              data={{
                labels: ["Temp (F)", "HR (BPM)", "SpO2"],
                datasets: [
                  {
                    data: lastTx,
                  },
                ],
              }}
              width={maxWidth} // from react-native
              height={250}
              fromZero={true}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#103952",
                backgroundGradientFrom: "#02395A",
                backgroundGradientTo: "#074164",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 6,
                },
              }}
              style={{
                marginVertical: 0,
                paddingHorizontal: "auto",
                borderRadius: 0,
              }}
            />

            <View style={styles.lastTxContainer}>
              <View style={styles.statsBox}>
                <Text style={[styles.text, { fontSize: 20 }]}>
                  Heart{"\n"}Beat
                </Text>
                <Text style={[styles.text, styles.subText]}>
                  {patientHR} BPM
                </Text>
              </View>
              <View
                style={[
                  styles.statsBox,
                  {
                    borderColor: "#DFD8C8",
                    borderLeftWidth: 2,
                    borderRightWidth: 2,
                  },
                ]}
              >
                <Text style={[styles.text, { fontSize: 20 }]}>
                  Body{"\n"}Temp.
                </Text>
                <Text style={[styles.text, styles.subText]}>
                  {patientTemp} F
                </Text>
              </View>
              <View style={styles.statsBox}>
                <Text style={[styles.text, { fontSize: 20 }]}>
                  Oxygen{"\n"}Saturation
                </Text>
                <Text style={[styles.text, styles.subText]}>
                  {patientSpO2} %
                </Text>
              </View>
            </View>
          </View>
        </Card>

        <Card.Divider />
        <Card containerStyle={[styles.card, {borderTopLeftRadius: 10, borderTopRightRadius:10, borderBottomLeftRadius:10, borderBottomRightRadius:10, marginBottom:20, paddingBottom:20, borderWidth:3, borderColor:'white'}]}>
          <Card.Title>
            <Text style={[styles.text, { color: "yellow", fontSize: 24, fontFamily:'MetropolisBold' }]}>
              Last Prescription
            </Text>
          </Card.Title>
          <Card.Divider />
          <Text style={{color: "white", fontSize: 20, fontFamily:'Righteous', marginLeft: 10}}>
              Name: {prescTitle}
            </Text>
            <Text style={{color: "white", fontSize: 20, fontFamily:'Righteous', marginLeft: 10}}>
              Details: {prescDetails}
            </Text>
            <Text style={{color: "white", fontSize: 20, fontFamily:'Righteous', marginLeft: 10}}>
              Prescribed At: {prescTime}
            </Text>
        </Card>

        <Card.Divider />
        <Card containerStyle={[styles.card, {borderTopLeftRadius: 10, borderTopRightRadius:10, borderBottomLeftRadius:10, borderBottomRightRadius:10, marginBottom:20, paddingBottom:20, borderWidth:3, borderColor:'white'}]}>
          <Card.Title>
            <Text style={[styles.text, { color: "red", fontSize: 24, fontFamily:'MetropolisBold' }]}>
              Last Notification
            </Text>
          </Card.Title>
          <Card.Divider />
          <Text style={{color: "white", fontSize: 20, fontFamily:'Righteous', marginLeft: 10}}>
              Name: {notifTitle}
            </Text>
            <Text style={{color: "white", fontSize: 20, fontFamily:'Righteous', marginLeft: 10}}>
              Details: {notifDetails}
            </Text>
            <Text style={{color: "white", fontSize: 20, fontFamily:'Righteous', marginLeft: 10}}>
              Notified At: {notifTime}
            </Text>
        </Card>

        {/* <FloatingAction
        floatingIcon={require("../assets/menu.png")}
        color={"#7EB8F1"}
        overlayColor={"rgba(208, 230, 252, 0.6)"}
        actions={actions}
        onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  /> */}
      </ScrollView>
    </View>
  );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#034772",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },

  card: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: "auto",
    paddingTop: 20,
    margin: "auto",
    borderStyle: "solid",
    borderWidth: 0,
    borderColor: "#154360",
    backgroundColor: "#0B3047",
  },

  spinnerText: { margin: 6, color: "white", alignSelf: 'center', fontFamily:'Righteous'},

  text: {
    fontFamily: "Metropolis",
    color: "white",
    textAlign: "center",
    fontWeight: "900",
  },

  buttonStyle:{
    backgroundColor:'#00619E',
    borderWidth:2,
    borderColor:'white'
  },
  buttonText: {
    fontFamily: "MetropolisBold",
    color: "white",
    textAlign: "center",
  },

  subText: {
    fontSize: 14,
    color: "#e3e1dc",
    fontFamily:'Secular',
    textTransform: "capitalize",
    fontWeight: "500",
  },

  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 0,
  },

  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 20,
  },

  lastTxContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  statusOnline:{
    color:'#1E8449'
  },
  statusOffline:{
    color:'#C0392B'
  }
});
