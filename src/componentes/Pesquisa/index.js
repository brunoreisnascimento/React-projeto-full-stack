
import styled from "styled-components";
import  Input from "../Input";
import { useState } from "react";
import { livros } from "../Pesquisa/dadosPesquisa";


const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const SubTitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa() {

    const [LivrosPesquisados, setLivrosPesquisados] = useState([])

    const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
    `
    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={e => {
                    const textDigit = e.target.value
                    const resuladoPesquisa = livros.filter(livro => livro.nome.includes(textDigit))
                    setLivrosPesquisados(resuladoPesquisa)
                } }
            />

            {LivrosPesquisados.map(livro => (
               <Result>
                     <img src={livro.src}/>
                    <p>{livro.nome}</p>
                  
               </Result>
            ))}
            {/* <p>{LivrosPesquisados}</p> */}
        </PesquisaContainer>
    )
}

export default Pesquisa