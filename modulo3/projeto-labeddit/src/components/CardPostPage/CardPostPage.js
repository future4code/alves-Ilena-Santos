import React from 'react'
import { ContainerCards, ContainerCardComment, TextName, TextBody, SectionClick, SectionLike } from './CardPostPage.styled'
import Like from "../../assets/like.svg"
import Dislike from "../../assets/dislike.svg"
import CommentBox from "../../assets/comments.svg"

export default function CardPostPage(props) {

  const commentsList = props.postInfo.map((comment) => {
    return (
      <ContainerCardComment key={comment.id}>
        <TextName>Enviado por: {comment.username}</TextName>
        <TextBody>{comment.body}</TextBody>
        <SectionClick>
          <SectionLike>
            <img src={Like} />
            <p>{comment.voteSum}</p>
            <img src={Dislike} />
          </SectionLike>
        </SectionClick>
      </ContainerCardComment>
    )
  })

  return (
    <ContainerCards>{commentsList}</ContainerCards>
  )
}
