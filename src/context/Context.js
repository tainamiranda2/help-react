import React, { createContext, useEffect, useState } from 'react';

export const AuthContext=createContext({})

export const AuthProvider=({children})=>{
    const [user,setUser]=useState();

    useEffect(()=>{
const userToken=localStorage.getItem("user_token");
//
const userStorage=localStorage.getItem("users_db");
//verificar  se tem token
if(userToken && userStorage){

    const hasUSer=JSON.parse(userStorage)?.filter(
    (user)=user.email===JSON.parse(userToken).email
    );
//vrificar s o email é o mesmoo
    if(hasUSer)  setUser(hasUSer[0]);
}

    },[])


    const signin =(email,password)=>{
        const userStorage=JSON.parse(localStorage.getItem("users_db"))

        const hasUSer=userStorage?.filter((user)=user.email===email);
            if(hasUSer?.length){
                if(hasUSer[0].email ===email && hasUSer[0].password===password){
                    const token=Math.random().toString(36).substring(2)
                localStorage.setItem("user_token", JSON.stringify({email,token}))
                setUser({email,password});
                return;
                
                }else{
                    return "E-mailou não encontrado"
                }

            }else{
                return "Usuário não encontrado"
            }
            
    }
//função de inscriçaõo
const singup=(email,password)=>{
    //rcuperação de dados
const userStorage=JSON.parse(localStorage.getItem("users_db"))

const hasUSer=userStorage?.filter((user)=user.email===email);

    if(hasUSer?.length){
        return "Já tem conta com esse E-mail"
    
    }

    let newUser;
    if(userStorage){
        newUser=[...userStorage,{email, password}];

    }else{
        newUser=[{email, password}];
    }

localStorage.setItem("users_db",JSON.stringify(newUser));
return;
}

const signout=()=>{
setUser(null);
localStorage.removeItem("user_token")
}

    return <AuthContext.Provider value={{user,signin: !!user,signin,singup, signout}}>

        {children}
    </AuthContext.Provider>
}