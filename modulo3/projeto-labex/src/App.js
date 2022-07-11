import ListTripsPage from "./pages/ListTripsPage/ListTripsPage"
import Header from "./components/Header/Header"
import {ContainerApp} from "./App-styled"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <ContainerApp >
      <Header/>
      <ListTripsPage />
      <Footer/>
    </ContainerApp>
  );
}

export default App;
