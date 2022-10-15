import React from 'react';
import *  as C from './style'
 export const Input=({name,placeholder,type,handleChange})=>{
    return(
        <C.input 
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        />
    )
}