import {ContainerApp} from "./App-styled"
import { Router } from "./routes/Router";
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <ContainerApp >
      <Router/>
      <Footer/>
    </ContainerApp>
  );
}

export default App;
