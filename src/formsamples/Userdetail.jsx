import {useActionState, useState} from 'react';

export const Userdetail = () => {
    const [userName,setUserName]=useState("siva");
    const [userAge,setUserAge]=useState(21);
    const Upusername=()=>{
        
        userName=="Siva" ? setUserName("Tripta"):setUserName("Siva");
    };
    const Upuserage=()=>{
       userAge==21 ? setUserAge(50):setUserAge(21);
    };
  return (
    <>
    <h1>User details</h1>
    <h3>{userName}</h3>
    <h3>{userAge}</h3>
    <button onClick={Upusername}>Upusname</button>
    <button onClick={Upuserage}>Upusage</button>
    </>
  );
};
