import React, { useState } from "react";
import Header from "./components/Header/Header";
import Matches from "./components/Matches/Matches";
import UserProfile from "./components/UserProfile/UserProfile";
import { ContainerAstroMatch, ContainerPage } from "./App-styled"
import { ChakraProvider } from '@chakra-ui/react'





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
