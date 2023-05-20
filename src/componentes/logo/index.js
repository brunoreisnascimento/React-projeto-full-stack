import logo from "../../imagens/logo.svg";
import styled from "styled-components";


const LogoMarca = styled.img`
    margin-right: 10px;
`
const LogoDiv = styled.div`
    display: flex;
    font-size: 30px;
`

function Logo() {
    return (
        <LogoDiv>
             <LogoMarca src={logo} alt="logo"/>
             <p><strong>Alura</strong>Book</p>
         </LogoDiv>
    )
}


export default Logo