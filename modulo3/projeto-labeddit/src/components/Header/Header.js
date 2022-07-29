import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToLogin } from '../../routes/cordinator'
import { ContainerHeader, ContainerHeaderPost } from './Header-styled'
import Logo from "../../assets/Logo2.svg"
import Close from "../../assets/close.svg"


export default function Header() {
  const navigate = useNavigate()

  useEffect(() => {
    headerOptions()
  }, [navigate])

  const logout = () => {
    localStorage.removeItem("token")
    goToLogin(navigate)
  }

  const headerOptions = () => {

    if (window.location.pathname === "/login") {
      return (
        <div></div>
      )
    } else if (window.location.pathname === "/cadastro") {
      return (
        <ContainerHeader>
          <img src={Logo} />
          <button onClick={() => goToLogin(navigate)}>Entrar</button>
        </ContainerHeader>
      )
    } else if (window.location.pathname === "/") {
      return (
        <ContainerHeader>
          <img src={Logo} />
          <button onClick={logout}>Logout</button>
        </ContainerHeader>
      )
    } else if (window.location.pathname.includes("/posts")) {
      return (
        <ContainerHeaderPost>
          <button onClick={() => goToFeed(navigate)}>
            <img src={Close} />
          </button>
          <img src={Logo} />
          <button onClick={logout}>Logout</button>
        </ContainerHeaderPost>
      )
    }
  }



  return (
    <div>{headerOptions()}</div>
  )
}
