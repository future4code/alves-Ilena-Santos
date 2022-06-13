import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImagemEstilizada = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`


const TextoEstilizado = styled.h4`
    margin-bottom: 15px;
`

const DivisaoDoTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <Container>
            <ImagemEstilizada src={ props.imagem } />
            <DivisaoDoTexto>
                <TextoEstilizado>{ props.nome }</TextoEstilizado>
                <p>{ props.descricao }</p>
            </DivisaoDoTexto>
        </Container>
    )
}

export default CardGrande;