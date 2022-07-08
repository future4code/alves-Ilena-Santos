import React from "react";
import axios from "axios";

class PokeCard extends React.Component {
  // Estado do componente PokeCard que contém a propriedade pokemon.
  state = {
    pokemon: {} // objeto que armazena detalhes de um pokemon (id, nome, imagem, etc...)
  };

  // Função que executa lógicas no início da renderização do componente.
  componentDidMount() {
    // Executa a função pegaPokemon, passando o nome do pokemon
    this.pegaPokemon(this.props.pokeName);
  };

  /* Início de comentário multi-linhas
  
    Função que executa lógicas após atualização específica do componente.
    Para esta lógica, utilizamos como variável de verificação a props
    pokeName, comparando o seu valor atual (this.props.pokeName) com o seu
    valor anterior (prevProps).
    
    Exemplo: Supondo que estamos exibindo o pokemon 'bulbasaur' no momento e queremos
    exibir agora o 'charmander'. Ao clicar na opção do select, atualizamos pokeName
    para o valor de 'charmander', enquanto prevProps será 'bulbasaur'.

    Observação: Assim como o parâmetro event nos eventos onChange, prevProps
    é considerado um parâmetro inerente ao componenteDidUpate.

  Fim de comentário multi-linhas */
  componentDidUpdate(prevProps) {
    /* Início de comentário multi-linhas

      Verificação é feita para que, toda vez que prevProps.pokeName for diferente 
      de props.pokeName, chamamos a função pegaPokemon novamente.

    Fim de comentário multi-linhas */
    if (prevProps.pokeName !== this.props.pokeName) {
      this.pegaPokemon(this.props.pokeName);
    };
  };

  // Função que captura detalhes de um pokemon pelo seu pokeName.
  pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        // Alteração do estado, armazenando a resposta da requisição solicitada.
        this.setState({ pokemon: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    /* Início de comentário multi-linhas
    
      Variável pokemon -> Armazena o valor atual de this.state.pokemon.
      Foi criado para simplificar a escrita, ao invés de digitar 
      continuamente this.state.pokemon nos elementos JSX.

    Fim de comentário multi-linhas */
    const pokemon = this.state.pokemon;

    return (
      <figure>
        {/* Início de comentário multi-linhas
        
          Curtos-circuitos utilizados a seguir (para 'name', 'types' e 'sprites')
          verificam se tais propriedades de pokemon existem, pois requisições
          são assíncronas (e tem um tempo, mesmo que mínimo, de resposta). Enquanto
          o endpoint não encerrar, estas são atribuídas como undefined.

          Observação:
          Métodos nativos JS só podem ser utilizados quando a variável analisada
          for do tipo específico do método (ex: toUpperCase() demanda que name exista
          e seja uma string).
          
        Fim de comentário multi-linhas */}
        <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
        <p>Peso: {pokemon.weight} Kg</p>
        <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </figure>
    );
  };
};

export default PokeCard;
