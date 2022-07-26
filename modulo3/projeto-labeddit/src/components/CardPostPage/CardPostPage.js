import React from 'react'
import { ContainerCardPostPage } from './CardPostPage.styled'

export default function CardPostPage(props) {
    const commentsList = props.postInfo.map((comment)=>{
        return (
          <ContainerCardPostPage key={comment.id}>
            <p>Enviado por: {comment.username}</p>
            <p>{comment.body}</p>
          </ContainerCardPostPage>
        )
       })
  return (
    <div>{commentsList}</div>
  )
}
