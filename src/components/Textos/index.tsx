import styled from 'styled-components'

export const Titulo = styled.h1`
    font-family: Museo700;
    text-align: center;
    color: #737176;
    margin-top: 3em;
    
`
export const BoxTexto = styled.article`
    width: 700px;
    margin: auto;
    text-align: center;
    border-radius: 20px;
    
    @media only screen and (max-width: 850px) {
        width: 80%;
        
    }
`
export const Texto = styled.p`
    text-align: center;
    color: #737176;
    font-size: 1.4em;
    margin: 0.6em 0;

`