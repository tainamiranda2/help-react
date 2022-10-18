import React from 'react';
import {InputSteye} from './style'

 export const Input=({name,
    placeholder,
    type,
    onChange})=>{
    return(
        <InputSteye
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        />
    )
}