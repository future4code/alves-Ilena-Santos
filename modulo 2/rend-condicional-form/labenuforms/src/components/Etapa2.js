import React, { Component } from 'react'
import styled from 'styled-components'

export default class Etapa1 extends Component {
  render() {
    return (
      <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <div>
            <p>5. Qual o curso?</p>
            <input></input>
        </div>
        <div>
            <p>6. Qual a unidade de ensino?</p>
            <input></input>
        </div>
        <button onClick={()=>this.props.mudaTela("etapa3")}>Próxima página</button>
       
      </div>
    )
  }
}