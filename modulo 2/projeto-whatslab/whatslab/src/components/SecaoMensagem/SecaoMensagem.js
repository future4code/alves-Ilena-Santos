import React from 'react'
import styled from 'styled-components'

const SpanEstilizado = styled.span`
    font-weight: bold;
  color: orangered;

`

class SecaoMensagem extends React.Component {
    
    
    render(){

    
        return(
            <p><SpanEstilizado>{this.props.usuario}</SpanEstilizado> : {this.props.mensagem} </p>
        )
    }
     
}

export default SecaoMensagem;