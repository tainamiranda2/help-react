import    React, { createContext, useEffect, useState } from 'react';

export const AuthContext=createContext({})

export const AuthProvider=({children})=>{
    const [user,setUser]=useState();

    useEffect(()=>{
const userToken=localStorage.getItem("user_token");
const userStorage=localStorage.getItem("users_db");

if(userToken && userStorage){

    const hasUSer=JSON.parse(userStorage)?.filter(
    (user)=user.email===JSON.parse(userToken).email
    );
//vrificar s o email é o mesmoo
    if(hasUSer)setUser([0]);
}

    },[])


    const sing =(email,password)=>{
        const userStorage=localStorage.getItem("users_db")

        const hasUSer=JSON.parse(userStorage)?.filter(
            (user)=user.email===JSON.parse(userToken).email
            );
            
    }

    return <AuthContext.Provider>

        {children}
    </AuthContext.Provider>
}