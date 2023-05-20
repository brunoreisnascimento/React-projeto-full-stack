import Logo from '../logo'
import Opcoesheader  from "../OpcoesHeader";
import IconesHeader from "../Icones/IconesHeader";
import styled from "styled-components";

const HeaderStyle = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderStyle>
            <Logo/>
            <Opcoesheader/>
            <IconesHeader/>
        </HeaderStyle>
         
    )
}

export default Header