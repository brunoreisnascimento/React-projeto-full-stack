import Logo from '../logo'
import Opcoesheader  from "../OpcoesHeader";
import IconesHeader from "../Icones/IconesHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderStyle>
            <Link to="/">
                <Logo/>
            </Link>
            <Opcoesheader/>
            <IconesHeader/>
        </HeaderStyle>
         
    )
}

export default Header