import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`
const InputEstilizado = styled.input`
  background-color: pink;   
  height: 20px;
  width: 300px;
`


class App extends React.Component {
  state = {
    posts:[
    {  
      nomeUsuario: 'paulinha',
      fotoUsuario:'https://picsum.photos/49/49',
      fotoPost:'https://picsum.photos/200/149'  
    },
    {  
      nomeUsuario: 'clara',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'  
    },
    {  
      nomeUsuario: 'marcelo',
      fotoUsuario:'https://picsum.photos/51/51',
      fotoPost:'https://picsum.photos/200/151'  
    },
     
    ],
  
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",

  }

  adicionaUsuario = () => {
    const novoUsuario = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const novosPosts = [...this.state.posts, novoUsuario]
    this.setState({posts: novosPosts})
  }


  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }


  render() {
    const listaDePosts = this.state.posts.map((post,indice)=> {
        return (
          <Post key = {indice}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
          />
        )
    })

    return (
      <MainContainer>
        <InputEstilizado
        value={this.state.valorInputNomeUsuario}
        onChange={this.onChangeInputNomeUsuario}
        placeholder={"Nome do usuário"}
        />
        <InputEstilizado
        value={this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder={"Foto do usuário"}
        />
        <InputEstilizado
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={"Foto para postar"}
        />
        <button onClick={this.adicionaUsuario}>Adicionar Usuário</button>
        {listaDePosts}

        {/* como estava antes: */}
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/49/49'}
          fotoPost={'https://picsum.photos/200/149'}
        />
        <Post
          nomeUsuario={'clara'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'marcelo'}
          fotoUsuario={'https://picsum.photos/51/51'}
          fotoPost={'https://picsum.photos/200/151'}
        /> */}
      </MainContainer>
    );
  }
}

export default App;
