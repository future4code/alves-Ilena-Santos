import React from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

class App extends React.Component {
  // Estado do componente App, composto pelas propriedades pokeList e pokeName.
  state = {
    pokeList: [], // lista de pokemons que está sendo guardada no estado.
    pokeName: "" // nome do pokemon escolhido no dropdown de seleção.
  };

  // Função que executa lógicas no início da renderização do componente.
  componentDidMount = () => {
    // Função axios -> Acessa a API e busca os 151 pokemons iniciais listados.
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        // Alteração do estado, armazenando a resposta da requisição solicitada.
        this.setState({ pokeList: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Função que captura o pokemon selecionado no dropdown de seleção.
  changePokeName = (event) => {
    this.setState({ pokeName: event.target.value });
  };

  render() {
    /* Início de comentário multi-linhas
    
      Variável pokeOptions -> Mapeia a propriedade pokeList, renderizando
      uma tag <option> para cada pokemon, com seu respectivo nome exibido como opção.
    
      Fim de comentário multi-linhas */
    const pokeOptions = this.state.pokeList.map(pokemon => {
      return (
        <option key={pokemon.name} value={pokemon.name}>
          {pokemon.name}
        </option>
      );
    });

    /* Início de comentário multi-linhas
    
      Variável pokemon -> Renderiza condicionalmente o componente PokeCard(componente
      responsável por exibir informações do pokemon, como nome, peso, type e imagem).
      A renderização verifica se a propriedade pokeName guarda um pokemon(modificada pela
      função changePokeName) ou se ela é uma string vazia(representada pela opção inicial
      'Nenhum'.).
      
      Observação: Na notação de curto-circuito &&, se a condição de teste (no nosso caso
      this.state.pokeName) for falsy, a segunda informação não é renderizada(<PokeCard />).
      Quando esta se torna truthy, então a segunda informação será exibida.

      Exemplos: 
        "" === true -> string vazia é considerada falsy na lógica booleana.
        "bulbasaur" === truthy -> strings com ao menos 1 caractere são consideradas truthy.
    
      Fim de comentário multi-linhas */
    const pokemon = this.state.pokeName && <PokeCard pokeName={this.state.pokeName} />;

    return (
      <>
        <header>
          <h1>Exibir Pokémon</h1>
        </header>
        <hr />
        <nav>
          <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
          <select id={"select-pokemon"} onChange={this.changePokeName}>
            <option value={""}>Nenhum</option>
            {pokeOptions}
          </select>
        </nav>
        <main>
          {pokemon}
        </main>
      </>
    );
  };
};

export default App;
