import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { Sing } from './pages/login/sing';
import { Singup } from './pages/login/sing-up';
import { Home } from './pages/home/Home';

export const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Sing/>}/>
                <Route path="/Sair" element={<Singup/>}/>
            </Routes>
        </BrowserRouter>
    )
}