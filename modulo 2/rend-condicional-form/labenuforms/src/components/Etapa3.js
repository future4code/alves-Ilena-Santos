import React, { Component } from 'react'
import styled from 'styled-components'

export default class Etapa1 extends Component {
  render() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <div>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input></input>
        </div>
        <div>
            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option value="Nenhum">Nenhum</option>
                <option value="Curso técnico">Curso técnico</option>
                <option value="Curso de inglês">Curso de inglês</option>
            </select>
        </div>
        <button onClick={()=>this.props.mudaTela("etapa4")}>Próxima página</button>
       
      </div>
    )
  }
}