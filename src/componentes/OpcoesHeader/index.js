import styled from 'styled-components';

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

const textOpcoes = ['Categorias', 'Favoritos', 'Minha Estante'];

function OpcoesHeader() {
    
    return (
        <Opcoes>
          { textOpcoes.map((texto) => (
            <Opcao className='opcao'><p>{texto}</p></Opcao>
          ) ) }
         </Opcoes>
    )
}

export default OpcoesHeader