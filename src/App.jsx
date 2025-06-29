import { styled } from "styled-components";
import EstilosGlobais from "./componetes/EstilosGlobais";
import Cabecalho from "./componetes/Cabecalho";
import BarraLateral from "./componetes/BarraLateral";
import Banner from "./componetes/Banner";
import bannerBackgroud from "./assets/banner.png";

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

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <Banner
            texto="A galeria mais completa de fotos do espaço!"
            backgroundImage={bannerBackgroud}
          />
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
