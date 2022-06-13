import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemPerfil from './foto-perfil.png';
import IconeCarta from './icone-cartinha.png';
import IconeEndereco from './icone-endereco.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil} 
          nome="Ilena Acioli" 
          descricao="Oi, me chamo ilena. Sou aluna da Labenu. Adoro aprender coisas novas e no momento estou me aventurando na programação. Amo estar entre amigos e família."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/32/32195.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={IconeCarta} 
          texto="Email: estudantelabenu@gmail.com" 
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={IconeEndereco} 
          texto="Endereço: Rua do Front-end, React-JS" 
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://i.pinimg.com/originals/f2/38/60/f2386006c6687269e80902d09d523b08.png" 
          nome="CSM-consultoria de estruturas" 
          descricao="Engenheira estrutural" 
        />
        
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj" 
          nome="Labenu" 
          descricao="Estudante Dev. Full Stack" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
