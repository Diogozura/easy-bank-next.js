import styled from 'styled-components';

export const BoxJogador = styled.article`
   width: 500px;
    margin-left: 5%;
    margin-top: 1em;
    @media screen and (max-width: 480px) {
        width: 95%;
        margin-left: 3%;
    }
`

export const NomeeIcon = styled.aside`
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    pre{
        margin: 0px 15px;
    }
    h2{
        margin: 0;
        font-size: 1.5em;
        font-weight: bold;
        color: #737176;
    }
`
export const Box = styled.aside`
    padding: 10px;
    background: #F4F4F4;
    text-align: center;
   box-shadow:  5px 5px 15px 5px rgba(0,0,0,0.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
`
export const SaldoFlag = styled.aside`
    text-align:center;
    display: grid;
    justify-items: center;
    margin-top
   h3{
       font-size: 1.3;
       font-weight: 600;
   }
`
export const BoxTrasnfere = styled.aside`
display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 400px;
    @media screen and (max-width: 480px) {
        width: 95%;
    }
`