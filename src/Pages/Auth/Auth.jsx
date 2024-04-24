import React, { useState } from 'react'
import { FaExclamation } from "react-icons/fa";
const Authentication = ({isSingup,authHandler,checkLogin}) => {
  let [showAlert,setShowAlert]=useState(false);
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let altClickHandler=(e,bol)=>{
    e.preventDefault()
    authHandler(bol)
  }
  let checkHandler=(e)=>{
    e.preventDefault();
    checkLogin({email,password})
  }
  const SingUp=() => {
  return (
    < >
      {console.log("singup",isSingup)}
      <input type="text" placeholder='Your Frist Name' />
      <input type="text" placeholder='Your Last Name' />
      <input type="text" placeholder='Your Email Address' />
      <label htmlFor="">Password</label>
      <input type="text" placeholder='your pasword' />
      <button>Sing Up</button>
      <button className='btn-alt' onClick={(e)=>altClickHandler(e,false)}>Login</button>
    </>
  )
}
const Login=()=>{
 return <>
     <h4>Login </h4>
    <label htmlFor="">E-mail</label>
    <input type="text" value={email} placeholder='Your Email Address'  onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor="">Password</label>
    <input type="text" placeholder='your pasword' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={(e)=>checkHandler(e)}>Login</button>
    <button className='btn-alt' onClick={(e)=>altClickHandler(e,true)}>singUp</button>
    </>
}

  return (
  <>
  <form action="" className='singUp'>
    {isSingup?<SingUp/>:<Login/>}
  </form>

  <div style={{background:"#fff",width:"44px",height:"44px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%", position:"absolute",bottom:"20px",right:"20px", cursor:"pointer" }} onClick={()=>{setShowAlert(true); setTimeout(()=>setShowAlert(false),3000)}}>
  <FaExclamation />
  </div>
{showAlert&& <div className='alret'>
  <p>for test app can use</p>
  <h6>Email: <span>example@example.com</span> </h6>  
  <h6>password: <span>example</span> </h6>  
  </div>}
  </>
    
  )
}


export default Authentication