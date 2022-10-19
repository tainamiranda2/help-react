import styled from "styled-components";
//fz as coisas ficarem no centro
export const Container=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:10px;
height:100vh;
`
//dixou um efeito mais  bonito no login
export const Content=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:15px;
width:100%;
box-shadow:0 1px 2px #0003;
background-color:#fff;
max-width:350px;
padding:20px;
border-radius:5px;
`
//deixou o  titulo mais bonito
export const Label=styled.label`
font-size:18px;
font-weight:600;
color: #676767;
`
export const LabelSingup=styled.label`
font-size:16px;
color: #676767;
`
export const LabelError=styled.label`
font-size:14px;
color: red;
`
export const Strong=styled.strong`
cursor:pointer;
*{
    text-decoration:none;
    color: #676767;
}
`
