import React, { useRef, useState } from 'react'
import { FaExclamation } from "react-icons/fa";
import { BsToggles2 } from "react-icons/bs";

const Authentication = ({isSingup,authHandler,checkLogin}) => {
  let [showAlert,setShowAlert]=useState(false);
  let emaiLRef=useRef();
  let passwordRef=useRef();
  const firstNameRef = useRef(null);
  let altClickHandler=(e,bol)=>{
    e.preventDefault();
    authHandler(bol)

  }
  let checkHandler=(e)=>{
    e.preventDefault();
    let email=emaiLRef.current.value;
    let password=passwordRef.current.value;
    checkLogin({email,password})
  }
  const singUpHandler=(e)=>{
    e.preventDefault();   
     let email=emaiLRef.current.value;
    let password=passwordRef.current.value;
    if(email!==null&&password!==null){
      authHandler(false,{name:firstNameRef,email,password})
    }
  }
  const SingUp=() => {
  return (
    <>
      <input type="text" placeholder='Your Name' ref={firstNameRef} />
      <input type="text" placeholder='Your Email Address' ref={emaiLRef} />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder='Your Password' ref={passwordRef} />
      <button onClick={singUpHandler}>Sign Up</button>
      <button className='btn-alt' onClick={(e) => altClickHandler(e)}>Login</button>
    </>
  )
}
const Login=()=>{
 return <>
     <h4>Login </h4>
    <label htmlFor="">E-mail</label>
    <input type="text" ref={emaiLRef} placeholder='Your Email Address'/>
    <label htmlFor="">Password</label>
    <input type="text" placeholder='your pasword' ref={passwordRef}/>
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