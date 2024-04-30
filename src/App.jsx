import { useState,useCallback,useEffect } from 'react'
// import SingUp from './Pages/Sing up/SingUp'
import Authentication from './Pages/Auth/Auth'
import "./assets/scss/styles.scss"
import Home from "./Pages/Home/Home";
import { fetchHandler } from './helpers/fetchHandler';
import { URL } from './helpers/config';

function App() {
  let [isLogin,setIsLogin]=useState(false);
  let [isSingup,setIsSingup]=useState(false);
  let [accounts,setAccounts]=useState({});

  const fetchAccountsHandler = useCallback(async () => {

  
    try {
    const  data=await fetchHandler(URL);
    console.log(Object.values(data));
      setAccounts(Object.values(data));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchAccountsHandler();
  }, [fetchAccountsHandler]);

   async function addAccount(acc) {
  fetchHandler(URL,acc,true)
  }


  let exampleAccount={
    name:"example",
    des:"this for test app only not real account",
    email:"example@example.com",
    password:"example",
    age:"21",
        bloodSugarLevel:"125",
    bloodPressure:"154",
    weight:"100",
    diabetesData:[{
      date: "Thu Apr 12 2024",
      bloodSugar: "120",
      bloodPressure: "120/80",
      Insulin: "10 ",
      Medication: "Metformin 1000mg",
      weight: "70 kg"
  },{
    date: "Thu Apr 16 2024",
    bloodSugar: "98 ",
    bloodPressure: "110/70 ",
    Insulin: "8",
    Medication: "Lisinopril 10mg",
    weight: "65 kg"
},
{
  date: "Thu Apr 20 2024",
  bloodSugar: "110 ",
  bloodPressure: "110/70",
  Insulin: "8 ",
  Medication: "Lisinopril 10mg",
  weight: "65 kg"
},
{
  date: "Thu Apr 25 2024",
  bloodSugar: "120 ",
  bloodPressure: "110/70",
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
  const authHandler=(bol,acc=null)=>{
    setIsSingup(bol)
    addAccount(acc)
  }
  // let updateAccount=(newRecord)=>{
  //   // let diabetesData=[...account.diabetesData,newRecord];
  //   // exampleAccount.diabetesData=diabetesData;
  //   // setAccount(exampleAccount)
  //   console.log(newRecord);

  // }
  let checkLogin=(data)=>{
    // setIsLogin(true)
     const account= accounts.filter(({email,password})=>email==data.email&&password==data.password);
    console.log("test",account);
     if(account!=="[]"){
      setIsLogin(true);
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
