const { adminLogin, getAllSeeds, publishMAMmsg, getSeed, getAllHash,getLastTransaction, sendPublicTransaction } = require('./thetamiddleware/middleware');
require('dotenv').config();

async function sendData() {
    testSeed =process.env.testSeed;
    testAddress =process.env.testAddress;
    console.log(testSeed)
    console.log(testAddress)
      var count=0;
      var readings=null;
      // var msg = await getLastTransaction(testAddress)
      // console.log(msg)
      while(true){
        count++;
        readings={
          TimeStamp: timestamp(),
          HR: getHeartRate(50,70),
          Temp: getBPM(70,90),
          BP:{
            systolic: getBPsys(60,90),
            diastolic: getBPdias(100,130)
          }
        }
        readings=JSON.stringify(readings);
        console.log(readings)
        var result = await sendPublicTransaction(testSeed, testAddress, readings, "readings");
        console.log(result)
    console.log(count);
      }

  }

  async function publishMam(){
    testSeed =process.env.testSeed;
    testAddress =process.env.testAddress;
    await publishMAMmsg(dummyMamMsg, testSeed, testAddress)
  }

  function dummyMamMsg(){
    return "Hello from IoTA"
  }

  function getHeartRate(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function getBPM(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function getBPsys(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function getBPdias(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function timestamp() {
    var today = new Date();
    var date =
      today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time + "/" + date;
    // console.log("Current time is " + dateTime);
    return dateTime;
  }

  async function fetchMam(){
    var io = require('socket.io-client');
    var socket =  io.connect("https://thetamiddleware.herokuapp.com/getMAM/MBNDML9YVMXWKOMQZKYNJZQQRIQUQYLSNNDLSHCEAKKDJYHBPEWXBNXNXWOGQTHYUCBPPECYHVQFTZFOQ&NTWSWV9CBWVKZXKLWSOHFLCJTDWIAMVSYRD9DFDXWJWFBVPWYUYDJQDOOLEWLPOAPHR9CHQKTMEOYRKDC");
    console.log(socket)
    socket.on('mamMsg', (data) => {console.log(data)})
    // await fetch("https://thetamiddleware.herokuapp.com/getMAM/MBNDML9YVMXWKOMQZKYNJZQQRIQUQYLSNNDLSHCEAKKDJYHBPEWXBNXNXWOGQTHYUCBPPECYHVQFTZFOQ&NTWSWV9CBWVKZXKLWSOHFLCJTDWIAMVSYRD9DFDXWJWFBVPWYUYDJQDOOLEWLPOAPHR9CHQKTMEOYRKDC")
  }

  async function sendDataWithAPI() {
    var testSeed =process.env.testSeed;
    var testAddress =process.env.testAddress;
    console.log(testSeed)
    console.log(testAddress)
      var count=0;
      var readings=null;
      // var msg = await getLastTransaction(testAddress)
      // console.log(msg)
      // while(true){
        // readings={
        //   TimeStamp: timestamp(),
        //   HR: getHeartRate(50,70),
        //   Temp: getBPM(70,90),
        //   SpO2: getBPsys(90,100),

        // }
        // var docLog = {
        //   TimeStamp: "14:44:7\n5-12-2020",
        //   LogType:0,
        //   LogDetails:"Doctor Offline"
        // }

        // var docNotification = {
        //   TimeStamp: "14:44:7\n5-12-2020",
        //   title:"Appointment",
        //   details:"You can meet doctor at 7pm on coming Monday"
        // }

        var prescriptions = {
          TimeStamp: "14:44:7\n5-12-2020",
          title:"Amoxil 50mg",
          details:"Three Times per day"
        }

        readings=JSON.stringify(prescriptions);
        await fetch("https://thetamiddleware.herokuapp.com/sendTx", {
          method: "POST",
          body: JSON.stringify({
              seed: testSeed,
              address: testAddress,
              txType:"prescription",
              Data: readings
          }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

      // }

  }

  sendDataWithAPI()
  // sendData()
  // publishMam()
// fetchMam()
