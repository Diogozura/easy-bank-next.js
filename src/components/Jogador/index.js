import styled from 'styled-components'

const Box = styled.aside`
    width: 300px;
    background-color: #452D;
    text-align: center;
    border-radius: 20px;
    margin :auto ;
`

export default function Jogador() {
    return (
        <Box>
            <p>
                imagem
            </p>
            <p>
                name do Jogador
            </p>
            <p>
                saldo
            </p>
            <p>
                Botão para transferir valor
            </p>
            <p>
                Flag bank
            </p>

        </Box>
    )
}