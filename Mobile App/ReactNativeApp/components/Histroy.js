import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { AppLoading } from 'expo';
import { Dimensions } from "react-native";
import { useFonts } from 'expo-font';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

//this.state = {

//}


export default function Readings({route, navigation}) {
  var [finished, setFinished]=useState(false)
  var [tableState, setTableState]= useState([]);
  var [hashArray, setHashArray] = useState([])
  var [histState, setHistState] = useState('Please Wait...')
  var [txInfo, setTxInfo] = useState([])
  var [tempArray, setTempArray] = useState([])
  var [hrArray, setHrArray] = useState([])
  var [systArray, setSystArray] = useState([])
  var [diastArray, setDiastArray] = useState([])
  var [BPArray, setBPArray] = useState([])
  var [tempArray, setTempArray] = useState([])

  var tempData=[]
  var hrData=[]
  var systData=[]
  var diastData=[]

  var tableData=[]
  var maxWidth = Dimensions.get("window").width;

  useEffect(() => {
    (async () => {

      try{
        const { address } = route.params;
        setHistState('Fetching Transaction Hashes\nPlease Wait......')
    var response = await fetch(`https://thetamiddleware.herokuapp.com/getAllHash/${address.toString()}&07-10-2020`);
    var resObj = await response.json();
    // Alert.alert("All Hashes", JSON.stringify(resObj.length));
    setHashArray(resObj)
    setHistState('Fetching Transactions from IOTA\nPlease Wait..........')
    for(var i=0; i<resObj.length; i++)
    {
      var responseTx = await fetch(`https://thetamiddleware.herokuapp.com/getTx/${resObj[i].toString()}`);
    var resObjTx = await responseTx.json();
    var parsed = JSON.parse(resObjTx)
    // Alert.alert(JSON.stringify(parsed))
    setTxInfo(txInfo.push(parsed))

    }
    // Alert.alert("Fetched",JSON.stringify(txInfo))

    for(var i=0; i<txInfo.length; i++)
    {
    var val = txInfo[i]
    var row=[]
      row.push(val.TimeStamp.toString());
      row.push(val.HR.toString());
      row.push(val.Temp.toString());
      row.push(val.BP.systolic.toString());
      row.push(val.BP.diastolic.toString());
      tempData.push(val.Temp)
      hrData.push(val.HR)
      systData.push(val.BP.systolic)
      diastData.push(val.BP.diastolic)
      tableData.push(row)

    }
    setTempArray(tempData)
    setHrArray(hrData)
    setSystArray(systData)
    setDiastArray(diastData)
    setTableState(tableData)
    setFinished(true)
    // Alert.alert(JSON.stringify(tableData))
      }
      catch(e){
        setFinished(true)
        // Alert.alert("Error Has Occurred")
      }



    })();
  }, []);


  var tableHead= ['Time','Heart Rate', 'Temp.', 'Syst. BP', 'Dia. BP'];

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
          textContent={histState}
          textStyle={styles.text}
        />
      <ScrollView horizontal={false} showsVerticalScrollIndicator={true} >

      {finished &&
      <View style={{marginBottom:30, paddingHorizontal:20}}>
        <Text style={[styles.text, { color: "white", fontFamily: 'MetropolisBold', fontSize:30 }]}>
              Infographics
            </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View>
            {/* Bar Chart Starts From Here */}
            <Card containerStyle={[styles.card, {borderRadius:0, borderWidth:0, marginRight:20,}]}>
            <Card.Title>
            <Text style={[styles.text, { color: "white", fontSize: 20 }]}>
              Body Temperature
            </Text>

            </Card.Title>
            <LineChart
              data={{
                labels: [],
                datasets: [
                  {
                    data: tempArray,
                    strokeWidth:2,
                  },
                ],
              }}
              bezier
              width={maxWidth} // from react-native
              height={250}
              withHorizontalLines={false}
              withVerticalLines={false}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#048bbd",
                backgroundGradientFrom: "#37c1d4",
                backgroundGradientTo: "#1e95a6",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              style={{
                marginVertical: 0,
                paddingHorizontal: "auto",
                borderRadius: 10,
              }}
            />
            </Card>

            </View>

            <View>
            {/* Bar Chart Starts From Here */}
            <Card containerStyle={[styles.card, {borderRadius:0, borderWidth:0, marginRight:20}]}>
            <Card.Title>
            <Text style={[styles.text, { color: "white", fontSize: 20 }]}>
              Blood Pressure
            </Text>

            </Card.Title>
            <LineChart
              data={{
                labels: [],
                datasets: [
                  {
                    data: systArray,
                    strokeWidth:2,
                  },
                ],
              }}
              bezier
              width={maxWidth} // from react-native
              height={250}
              withHorizontalLines={false}
              withVerticalLines={false}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#048bbd",
                backgroundGradientFrom: "#37c1d4",
                backgroundGradientTo: "#1e95a6",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              style={{
                marginVertical: 0,
                paddingHorizontal: "auto",
                borderRadius: 10,
              }}
            />
            </Card>

            </View>

            <View>
            {/* Bar Chart Starts From Here */}
            <Card containerStyle={[styles.card, {borderRadius:0, borderWidth:0, marginRight:20}]}>
            <Card.Title>
            <Text style={[styles.text, { color: "white", fontSize: 20 }]}>
              Heart Rate
            </Text>

            </Card.Title>
            <LineChart
              data={{
                labels: [],
                datasets: [
                  {
                    data: hrArray,
                    strokeWidth:2,
                  },
                ],
              }}
              bezier
              width={maxWidth} // from react-native
              height={250}
              withHorizontalLines={false}
              withVerticalLines={false}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#048bbd",
                backgroundGradientFrom: "#37c1d4",
                backgroundGradientTo: "#1e95a6",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              style={{
                marginVertical: 0,
                paddingHorizontal: "auto",
                borderRadius: 10,
              }}
            />
            </Card>

            </View>
      </ScrollView>
      </View>
      }

      {finished &&

      <Card containerStyle={[styles.card, {borderTopLeftRadius: 20, borderTopRightRadius: 20,}]}>
        <Card.Title>
            <Text style={[styles.text, { color: "white", fontSize: 20 }]}>
              Your Readings are shown below
            </Text>
            </Card.Title>
      <Table  style={styles.tableStyle} borderStyle={{borderWidth: 2, borderColor: 'white'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.headerText}/>
        <Rows data={tableState} textStyle={styles.text}/>
      </Table>
      </Card>

      }

      </ScrollView>
    </View>
  )
}
}


const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30, backgroundColor: '#034772' },
  head: { height: 40, backgroundColor: '#154360' },
  text: { margin: 6, color: "white", alignSelf: 'center', fontFamily:'Righteous'},
  headerText: { margin: 6, color: "white", alignSelf: 'center', fontFamily:'MetropolisBold'},
  tableStyle: { backgroundColor: "#485776"},
  card: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: "auto",
    paddingTop: 20,
    margin: "auto",
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "#F6F8FC",
    backgroundColor: "#0B3047",
  },

});
