import { Box, Parte, SubTitulo, Text, Titulo } from "../../screens/HomeScreen"
import styled from "styled-components"
const CaixaRegras = styled.article`
padding: 10px;
    margin: 1em 0;
    text-align: justify;
`

export default function Regras() {
    return (
        <>
            <CaixaRegras>
                <Titulo id="regras">Regras</Titulo>
                <Parte>
                    {/* Criar sala */}
                    <Box margin="2em">
                        <aside>
                            <SubTitulo>Regras da criação da sala</SubTitulo>
                            <SubTitulo>Criar sala</SubTitulo>
                            <Text>
                                Clique em criar sala e selecione o valor inicial para cada jogador. Em alguns jogos recomenda-se a quantia inicial de 2.558.000. Em seguida selecione seu nome e sua cor. Abaixo estará o código da sala para você compartilhar com seus amigos.
                                Clique novamente em criar sala para ir para a sala do jogo (ao criar a sala você se tornará automaticamente o banco no jogo).
                            </Text>
                        </aside>
                        <aside>
                            <SubTitulo>Entrar na sala</SubTitulo>
                            <Text>
                                Coloque o código da sala e clique em entrar na sala. Após isso selecione sua cor e seu nome e avance em iniciar game.

                            </Text>
                        </aside>
                    </Box>

                    {/* Jogabilidade  */}
                    <Box margin="1em">
                    <SubTitulo>Regras de jogabilidade</SubTitulo>
                        <CaixaRegras>
                        
                        <SubTitulo>Como fazer transferência</SubTitulo>
                        <Text>
                        Clique no botão transferir e  aparecerá uma tela onde você deve selecionar entre transferir para o banco ou para alguns de seus amigos.
                        </Text>
                        </CaixaRegras>
                        <CaixaRegras>
                        
                        <SubTitulo>Como transferir sendo banco</SubTitulo>
                            <Text>
                                
                            Ative o modo banco, em "ON" e selecione transferir. Aparecerá uma tela onde você deve selecionar para quem será a transferência.

                       </Text>
                        </CaixaRegras>
                        <CaixaRegras>
                        
                        <SubTitulo>Como transferir a responsabilidade do banco</SubTitulo>
                            <Text>
                            Se você for banco pode clicar no botão "Passar o Bastão" e escolher quem será o próximo felizardo a ter que ser o banco.
                            
                       </Text>
                        </CaixaRegras>

                        <CaixaRegras>
                        
                        <SubTitulo></SubTitulo>
                            <Text>
                                
                            
                       </Text>
                        </CaixaRegras>
                       
                       
                    </Box>

                </Parte>
            </CaixaRegras>

        </>
    )
}