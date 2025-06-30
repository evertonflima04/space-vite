import { styled } from "styled-components";
import EstilosGlobais from "./componetes/EstilosGlobais";
import Cabecalho from "./componetes/Cabecalho";
import BarraLateral from "./componetes/BarraLateral";
import Banner from "./componetes/Banner";
import bannerBackgroud from "./assets/banner.png";
import Galeria from "./componetes/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./componetes/ModalZoom";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-height: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column; // Organiza os itens em coluna
  flex-grow: 1; // Permite que a galeria ocupe o espaço restante
`;

const App = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackgroud}
            />
            <Galeria 
            aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
            fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} />
    </FundoGradiente>
  );
}

export default App;
