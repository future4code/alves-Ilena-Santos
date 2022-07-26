import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../../routes/cordinator'


export default function Header() {
const navigate = useNavigate()

useEffect(()=>{
  headerOptions()
},[navigate])

const logout = () => {
 localStorage.removeItem("token")
 goToLogin(navigate)
}

const headerOptions = () =>{

    if(window.location.pathname==="/login") {
      return (
        <div></div>
      )
    } else if (window.location.pathname ==="/cadastro"){
      return(
        <div>
          <h3>LOGO</h3>
          <button onClick={()=>goToLogin(navigate)}>Entrar</button>
        </div>
      )
    } else if (window.location.pathname ==="/") {
      return(
        <div>
          <h3>LOGO</h3>
          <button onClick={logout}>Logout</button>
        </div>
      )
    } else if (window.location.pathname ==="/post/:id") {
      return(
        <div>
          <h3>LOGO</h3>
          <button onClick={logout}>Logout</button>
        </div>
      )
    }
}



  return (
    <div>{headerOptions()}</div>
  )
}
