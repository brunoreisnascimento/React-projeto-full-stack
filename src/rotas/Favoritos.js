import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFavoritos } from '../servicos/favoritos';


  const AppContainer = styled.div `
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(90deg,#002f52 35%,#326589 165%);
    `

  function Favoritos() {
        const [favoritos, setFavoritos] = useState([])

        async function fetchFavoritos() {
            const favoritosDaAPI = await getFavoritos
            setFavoritos(favoritosDaAPI)
        }

        useEffect(() => {
            fetchFavoritos()
        }, [])

        return (
            <AppContainer>
            </AppContainer>
        );
    }

export default Favoritos