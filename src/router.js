import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { Sing } from './pages/login/sing';
import { Singup } from './pages/login/sing-up';
import { Home } from './pages/home/Home';
import { About } from './pages/About/About';
import { Manag } from './pages/Manag/Manag';
//import useAuth from './hooks/useAuth';

const Private=({Item})=>{
    //verificar se esta logado
    //const {signed}=useAuth();
  //  const signed =true;
    const signed =false;

    return signed > 0 ? <Item/> : <Sing/>
}

export const Router=()=>{

   
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Private Item={Home} />} />
                <Route path="/About" element={<Private Item={About} About/>} />
                <Route path="/Manag" element={< Manag/>} />

                <Route path="/Login" element={<Sing/>}/>
                <Route path="/Registrar" element={<Singup/>}/>
            </Routes>
        </BrowserRouter>
    )
}