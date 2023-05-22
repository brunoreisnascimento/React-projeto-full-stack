import { livros } from "./dadosUltimosLancamento";
import { Titulo } from "../Titulo"
import CardRecomendacao from "../CardRecomendacao";
import livro2 from "../../imagens/livro2.png";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#000" 
                tamanhoFonte="36px" 
                alinhamento="center"
            >
                Últimos Lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src} alt ="imagem"/>
                ))}
            </NovosLivrosContainer>
            <CardRecomendacao
                titulo="Talvez você se intresse por"
                subTitulo="Angular 11"
                desc="Construindo uma aplicacao com a plataforma Goole "
                img={livro2}
            >

            </CardRecomendacao>
        </UltimosLancamentosContainer>
    )
    
} export default UltimosLancamentos