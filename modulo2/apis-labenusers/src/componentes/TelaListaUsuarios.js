import axios from "axios";
import React from "react";




export default class TelaListaUsuarios extends React.Component {
   


  render() {
    const listaDeUsuarios = this.props.listaDeUsuarios.map((usuario)=>{
        return <div key={usuario.id}>
            <li>{usuario.name}</li>
            <button onClick={()=>this.props.deletaUsuario(usuario.id)}>Remover</button>
            </div>
    })
    return (
      <div>
        <button onClick={()=>this.props.mudaTela("cadastro")}>Trocar de tela</button>
        <button onClick={()=>this.props.pegaUsuarios()}>Ver lista</button>
        {listaDeUsuarios}

      </div>
    )
  }
}
