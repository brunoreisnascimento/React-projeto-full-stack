import styled from 'styled-components';
import { Link } from "react-router-dom"

const Opcoes = styled.ul`
display: flex;
`

const Opcao = styled.li`
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    font-size: 16px;
`

const textOpcoes = ['Categorias', 'Favoritos', 'Estante'];

function OpcoesHeader() {
    
    return (
        <Opcoes>
          { textOpcoes.map((texto) => (
            <Link to={`/${texto.toLowerCase()}`}>
              <Opcao className='opcao'><p>{texto}</p></Opcao>
            </Link>
          ) ) }
         </Opcoes>
    )
}

export default OpcoesHeader