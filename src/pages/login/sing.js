import React from 'react';
import { Input } from '../../componenst/input/Input';
import { Button } from '../../componenst/button/Button';

export const Sing=()=>{

const handleChange=(event)=>{

}

const handleSubmit(){

}
    return(
        <>
        <h2>Entrar</h2>
        {/*estilizar */}
        <form>
            <Input
            type='email'
            placeholder="informe seu email"
            onChange={handleChange}
            />
             <Input
            type='password'
            placeholder="informe sua senha"
            onChange={handleChange}
            />

            <Button
             text="entrar"
             onClick={handleSubmit}
             />
        </form>
        </>
    )
}