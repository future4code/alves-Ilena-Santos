
import styled from 'styled-components'
import React from 'react'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Etapa4 from './components/Etapa4'





export default class App extends React.Component {
  state = {
    tela: "etapa1"
  }
  exibeTela = () => {
    if (this.state.tela === "etapa1"){
      return <Etapa1 mudaTela={this.mudaTela}/>
    } else if (this.state.tela ==="etapa2"){
      return <Etapa2 mudaTela={this.mudaTela}/>
    } else if (this.state.tela ==="etapa3"){
      return <Etapa3 mudaTela={this.mudaTela}/>
    } else {return <Etapa4/>}
  }
  mudaTela = (telaEscolhida) => {
    this.setState({tela: telaEscolhida})
  }

  render() {
    return (
      <div> 
        {this.exibeTela()}
      </div>
    )
  }
}
