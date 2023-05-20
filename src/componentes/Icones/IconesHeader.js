import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';


const Icon = styled.li`
  margin-right: 40px ;
  width: 25px;
`
const Icons = styled.ul`
  display: flex;
  align-items: center;
`
const IconsType = [perfil, sacola];

function IconesHeader() {
    return (
        <Icons>
        { IconsType.map( (i) => (
          <Icon className='icone' >
            <img src={i} alt='icone'></img>
          </Icon>
        ))}
     </Icons>
    )
}

export default IconesHeader