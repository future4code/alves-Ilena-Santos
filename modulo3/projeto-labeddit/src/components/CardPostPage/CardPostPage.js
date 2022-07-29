import React from 'react'
import { ContainerCardComment, TextName, TextBody, SectionClick, SectionLike } from './CardPostPage.styled'
import Like from "../../assets/like.svg"
import Dislike from "../../assets/dislike.svg"

export default function CardPostPage(props) {

  const commentsList = props.postInfo.map((comment) => {
    return (
      <ContainerCardComment key={comment.id}>
        <TextName>Enviado por: {comment.username}</TextName>
        <TextBody>{comment.body}</TextBody>
        <SectionClick>
          <SectionLike>
            <img src={Like} onClick={() => { props.like(comment.id) }} />
            <p>{comment.voteSum}</p>
            <img src={Dislike} onClick={() => { props.dislike(comment.id) }} />
          </SectionLike>
        </SectionClick>
      </ContainerCardComment>
    )
  })

  return (
    <div>{commentsList}</div>
  )
}
