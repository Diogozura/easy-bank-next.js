import Head from "next/head";
import Link from "next/link";
import Footer from "../src/components/Footer";
import Topo from "../src/components/Header";
import { Titulo } from "../src/components/Titulo";
import { Bloco } from "./termosPrivacidade";

export default function TermosUso() {
    return (
        <>
             <Head>
             <title>Termos de Uso - Easy Imobiliário </title>
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <Topo children={undefined}/>

            
        <Titulo>Termos de Uso</Titulo>
        <Bloco>
        <h2>1. Termos</h2>
            <p>Ao acessar ao site <a href='https://easyimobiliario.com.br'>easy bank</a>, concorda em cumprir estes
                termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo
                cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está
                proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de
                direitos autorais e marcas comerciais aplicáveis.</p>
            <h2>2. Uso de Licença</h2>
            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no
                site easy bank , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma
                licença, não uma transferência de título e, sob esta licença, você não pode: </p>
            <ol>
                <li>modificar ou copiar os materiais;  </li>
                <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não
                    comercial);  </li>
                <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site easy bank; 
                </li>
                <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou  </li>
                <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
            </ol>
            <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
                rescindida por easy bank a qualquer momento. Ao encerrar a visualização desses materiais ou após o
                término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato
                eletrónico ou impresso.</p>
            <h2>3. Isenção de responsabilidade</h2>
            <ol>
                <li>Os materiais no site da easy bank são fornecidos 'como estão'. easy bank não oferece garantias,
                    expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem
                    limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou
                    não violação de propriedade intelectual ou outra violação de direitos. </li>
                <li>Além disso, o easy bank não garante ou faz qualquer representação relativa à precisão, aos
                    resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma
                    relacionado a esses materiais ou em sites vinculados a este site.</li>
            </ol>
                <h2>4. Limitações</h2>
                
            <p>Em nenhum caso o easy bank ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem
                limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou
                da incapacidade de usar os materiais em easy bank, mesmo que easy bank ou um representante autorizado da
                easy bank tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas
                jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos
                conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>
                <h2>5. Precisão dos materiais</h2>
                
            <p>Os materiais exibidos no site da easy bank podem incluir erros técnicos, tipográficos ou fotográficos.
                easy bank não garante que qualquer material em seu site seja preciso, completo ou atual. easy bank pode
                fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto,
                easy bank não se compromete a atualizar os materiais.</p>
            <h2>6. Links</h2>
            <p>O easy bank não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de
                nenhum site vinculado. A inclusão de qualquer link não implica endosso por easy bank do site. O uso de
                qualquer site vinculado é por conta e risco do usuário.</p>
            
            <h3>Modificações</h3>
            <p>O easy bank pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar
                este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
            <h3>Lei aplicável</h3>
            <p>Estes termos e condições são regidos e interpretados de acordo com as leis do easy bank e você se submete
                irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
            </Bloco>
            
        <Footer/>
        </>

        
    )
}