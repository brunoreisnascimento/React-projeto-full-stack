import Pesquisa from "../componentes/Pesquisa";
import styled from 'styled-components';
import UltimosLancamentos from "../componentes/UltimosLancamentos"

const AppContainer = styled.div `
  
    width: 100vw;
    height: 100vh;
`


function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
