import React from "react";

const AccountContext= React.createContext({
    email:"",
    password:"",
    accountData:"",
    login:false,
    addRecord:(newRecord)=>{},
});
export default AccountContext