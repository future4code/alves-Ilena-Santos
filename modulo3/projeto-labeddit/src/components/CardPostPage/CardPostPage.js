import React from 'react'
import { ContainerCardComment, TextName, TextBody, SectionClick, SectionLike } from './CardPostPage.styled'
import Like from "../../assets/like.svg"
import LikeGrey from "../../assets/likeGrey.jpeg"
import Dislike from "../../assets/dislike.svg"
import DislikeGrey from "../../assets/dislikeGrey.jpeg"


export default function CardPostPage(props) {

  const commentsList = props.postInfo.map((comment) => {
    const imgLike = () => {
      if (comment.userVote === 1) {
        return <img src={LikeGrey} onClick={() => { props.like(comment.id) }} alt="seta cinza para cima"/>
      } else {
        return <img src={Like} onClick={() => { props.like(comment.id) }} alt="seta para cima" />
      }
    }

    const imgDislike = () => {
      if (comment.userVote === -1) {
        return <img src={DislikeGrey} onClick={() => { props.dislike(comment.id) }} alt="seta cinza para baixo"/>
      } else {
        return <img src={Dislike} onClick={() => { props.dislike(comment.id) }} alt="seta para baixo"/>
      }
    }
    return (
      <ContainerCardComment key={comment.id}>
        <TextName>Enviado por: {comment.username}</TextName>
        <TextBody>{comment.body}</TextBody>
        <SectionClick>
          <SectionLike>
            {imgLike()}
            <p>{comment.voteSum}</p>
            {imgDislike()}
          </SectionLike>
        </SectionClick>
      </ContainerCardComment>
    )
  })

  return (
    <div>{commentsList}</div>
  )
}
