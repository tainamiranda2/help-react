import React, { useState } from 'react';
import { Input } from '../../componenst/input/Input';
import { Button } from '../../componenst/button/Button';
import { Link } from 'react-router-dom';
//import useAuth from '../../hooks/useAuth';
export const Sing=()=>{

const [email, setEmail]=useState("")
const [senha, setSenha]=useState("")
const [error, setError]=useState("")


//console.log(handleSubmit)

    return(
        <>
        <h2>Sistema de login</h2>
        {/*estilizar */}
       
         <Input
            type='email'
            placeholder="informe seu email"
           onChange={(e)=>[setEmail(e.target.value),setError("")]}
           value={email}
            />
             <Input
            type='password'
            placeholder="informe sua senha"
            onChange={(e)=>[setSenha(e.target.value),setError("")]}

           value={senha}
            />
            
<label>{error}</label>
           <Button
             text="entrar"
            // onClick={handleSubmit}
             />
              <label>Não tem conta</label>
      <strong>
  <Link  to="/">Registrar-se</Link>    

        </strong>
        </>
    )
}