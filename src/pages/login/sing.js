import React, { useState } from 'react';
import { Input } from '../../componenst/input/Input';
import { Button } from '../../componenst/button/Button';
import { Link } from 'react-router-dom';
//import useAuth from '../../hooks/useAuth';
import { Container,Content,Label,LabelSingup,LabelError,Strong } from './style';
export const Sing=()=>{

const [email, setEmail]=useState("")
const [senha, setSenha]=useState("")
const [error, setError]=useState("")


//console.log(handleSubmit)

    return(
        <Container>
        <Label>Sistema de login</Label>
    <Content>
       
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
            
<LabelError>{error}</LabelError>
           <Button
             text="entrar"
            // onClick={handleSubmit}
             />
              <LabelSingup>Não tem conta</LabelSingup>
      <Strong>
  <Link  to="/Registrar">Registrar-se</Link>    

        </Strong>
        </Content>
        
        </Container>
    )
}