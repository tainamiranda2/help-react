import React from 'react';
import *  as C from './style'
 export const Button=({type,text,onClick})=>{
    return(
        <C.button type={type} onClick={onClick}>
           {text} 
        </C.button>
    )
}