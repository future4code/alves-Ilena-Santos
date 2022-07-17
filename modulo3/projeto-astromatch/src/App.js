import React, { useState } from "react";
import Header from "./components/Header/Header";
import Matches from "./components/Matches/Matches";
import UserProfile from "./components/UserProfile/UserProfile";
import { ContainerAstroMatch, ContainerPage } from "./App-styled"
import { ChakraProvider } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';





function App() {
  const [screen, setScreen] = useState("profiles")

  const changeScreen = (chosen) => {
    setScreen(chosen)
  }

  const selectPage = () => {
    switch (screen) {
      case "matches":
        return <Matches />
      case "profiles":
        return <UserProfile />
      default:
        return <p>Página não encontrada</p>
    }
  }

  return (
    <ChakraProvider>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <ContainerPage>
        <ContainerAstroMatch>
          <Header changeScreen={changeScreen} screen={screen} />
          {selectPage()}
        </ContainerAstroMatch>
      </ContainerPage>
    </ChakraProvider>
  );
}

export default App;
