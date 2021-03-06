import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

import iconeMarcacaoBranco from '../../img/icone-marcacao-branco.png'
import iconeMarcacaoPreto from '../../img/icone-marcacao-preto.png'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    numeroMarcacao: 0,
    comentario: ""
  }

  onClickCurtida = () => {
    if (this.state.numeroCurtidas >= 1) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1

      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
        curtido: !this.state.curtido,
      })
    }

    this.setState({
      curtido: !this.state.curtido,
    })
    // console.log('Curtiu!')
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  
  }

  onClickMarcado = () => {
    this.setState({
      marcado: !this.state.marcado,
      numeroMarcacao: this.state.numeroMarcacao + 1
    })
  }



  render() {
    let iconeCurtida


    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto


    } else {
      iconeCurtida = iconeCoracaoBranco

    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let iconeMarcacao

    if (this.state.marcado) {
      iconeMarcacao = iconeMarcacaoPreto


    } else {
      iconeMarcacao = iconeMarcacaoBranco

    }




    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeComContador
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcado}
          valorContador={this.state.numeroMarcacao}
        />
      </PostFooter>
      {componenteComentario}
      <p>{this.state.comentario}</p>
    </PostContainer>
  }
}

export default Post