import React from 'react'
import styled from 'styled-components'

const SpanEstilizado = styled.span`
    font-weight: bold;
  color: orangered;

`
const BalaoDeMensagem = styled.div`
background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" 
        } else if (props.tipo === "outro") {
            return "#ffffff" 
        }
    }};
`

class SecaoMensagem extends React.Component {
    deletarMensagem = () => {
        console.log("cliclou duas vezes para deletar")
    }

    render() {
        const nome = this.props.usuario
        if (nome === "eu") {

            return (

                <BalaoDeMensagem tipo={"eu"} onDoubleClick={this.deletarMensagem}>
                    <SpanEstilizado >{this.props.usuario}</SpanEstilizado> : {this.props.mensagem} </BalaoDeMensagem>
            )
        } else {
            return (

                <BalaoDeMensagem tipo={"outro"} onDoubleClick={this.deletarMensagem}>
                    <SpanEstilizado >{this.props.usuario}</SpanEstilizado> : {this.props.mensagem} </BalaoDeMensagem>
            )
        }
    }
}

export default SecaoMensagem;