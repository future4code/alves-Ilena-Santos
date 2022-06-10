import React from 'react';
import styled from 'styled-components';
import SecaoMensagem from './components/SecaoMensagem/SecaoMensagem';

const MainContainer = styled.section`
  display: grid;
  border: 1px solid black;
  align-items: end;
  width: 500px;
  grid-template-columns: 500px;
  grid-template-rows: 500px 20px;
`
const InputSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-columns: 100px 1fr 70px;
`
const MoveMsg = styled.div`
  padding-left: 20px;
`


class App extends React.Component{
  state = {
    mensagens: [
    ],

    valorInputUsuario: "",
    valorInputMensagem: "",
  }

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    }

    const novasMensagens = [...this.state.mensagens, novaMensagem]
    this.setState({mensagens: novasMensagens})
    this.setState({
      valorInputMensagem: [],
      valorInputUsuario:[]
    })
  }

  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario:event.target.value})
  }
  
  onChangeInputMensagem = (event) => {
    this.setState({valorInputMensagem:event.target.value})
  }

  render() {
    
    

    const listaDeMensagens = this.state.mensagens.map((msg,indice) => {
      return (
        <SecaoMensagem key = {indice}
        usuario = {msg.usuario}
        mensagem ={msg.mensagem} />
      )
    })


  return (
    <MainContainer>
      <MoveMsg>{listaDeMensagens}</MoveMsg>
      <InputSection>
        <input
        value={this.state.valorInputUsuario}
        onChange={this.onChangeInputUsuario}
        placeholder={"Usuário"}
        />
         <input
        value={this.state.valorInputMensagem}
        onChange={this.onChangeInputMensagem}
        placeholder={"Mensagem"}
        />
        <button onClick={this.adicionaMensagem}>Enviar</button>
      </InputSection>

    </MainContainer>
  )
  }

}

export default App;
