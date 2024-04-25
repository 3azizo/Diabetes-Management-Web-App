import { useState } from 'react'
// import SingUp from './Pages/Sing up/SingUp'
import Authentication from './Pages/Auth/Auth'
import "./assets/scss/styles.scss"
import Home from "./Pages/Home/Home"

function App() {
  let [isLogin,setIsLogin]=useState(false);
  let [isSingup,setIsSingup]=useState(false);
  let [account,setAccount]=useState({})

  let exampleAccount={
    name:"example",
    des:"this for test app only not real account",
    email:"example@example.com",
    password:"example",
    age:"21",
        bloodSugarLevel:"125",
    bloodPressure:"154",
    weight:"100",
    lastBloodSugarReading:"120",
    lastBloodPressureReading:"120/80",
    diabetesData:[{
      date: "Thu Apr 12 2024",
      bloodSugar: "120 mg/dL",
      bloodPressure: "120/80 mmHg",
      Insulin: "10 units",
      Medication: "Metformin 1000mg",
      weight: "70 kg"
  },{
    date: "Thu Apr 16 2024",
    bloodSugar: "98 mg/dL",
    bloodPressure: "110/70 mmHg",
    Insulin: "8 units",
    Medication: "Lisinopril 10mg",
    weight: "65 kg"
},
{
  date: "Thu Apr 20 2024",
  bloodSugar: "110 mg/dL",
  bloodPressure: "110/70 mmHg",
  Insulin: "8 units",
  Medication: "Lisinopril 10mg",
  weight: "65 kg"
},
{
  date: "Thu Apr 25 2024",
  bloodSugar: "120 mg/dL",
  bloodPressure: "110/70 mmHg",
  Insulin: "8 units",
  Medication: "Lisinopril 10mg",
  weight: "65 kg"
}
]
  }
 
  const tipsData = [
    "The importance of blood sugar levels",
    "The importance of taking medical medications",
    "The importance of following a healthy diet",
    "The importance of exercising",
    "The importance of establishing a medical course",
  ];
  const authHandler=(bol)=>{
    setIsSingup(bol)

  }
  // let updateAccount=(newRecord)=>{
  //   // let diabetesData=[...account.diabetesData,newRecord];
  //   // exampleAccount.diabetesData=diabetesData;
  //   // setAccount(exampleAccount)
  //   console.log(newRecord);

  // }
  let checkLogin=(data)=>{
    // setIsLogin(true)
    if(data.email===exampleAccount.email&&data.password===exampleAccount.password){
      setIsLogin(true)
    }
  }
  return (
    <>
   {!isLogin&&<div className='registration-container'>
    <Authentication isSingup={isSingup} authHandler={authHandler} checkLogin={checkLogin}/></div>}
    {isLogin&&<Home patientData={exampleAccount} tipsData={tipsData}/>}
    </>
  )
}

export default App
