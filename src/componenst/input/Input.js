import React from 'react';

 export const Input=({name,placeholder,type,handleChange})=>{
    return(
        <input 
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        />
    )
}