import React from 'react';
import {ButtonStyle} from './style'

 export const Button=({
    text,
    onClick})=>{
    return(
        <div>
        <ButtonStyle
        onClick={onClick}  
        >{text}</ButtonStyle>
      
      </div>
    )
}