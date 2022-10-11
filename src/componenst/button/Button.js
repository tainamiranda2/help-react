import React from 'react';

 export const Button=({type,text,onClick})=>{
    return(
        <button type={type} onClick={onClick}>
           {text} 
        </button>
    )
}