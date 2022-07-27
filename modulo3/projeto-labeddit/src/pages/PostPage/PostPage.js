import React, { useState, useEffect } from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { useParams } from "react-router-dom"
import CardPostPage from "../../components/CardPostPage/CardPostPage"
import useForm from '../../hooks/useForm'
import { addComment } from '../../services/comments'
import { ContainerCardFeed, TextName, TextBody, SectionClick, SectionLike, SecttionComment } from '../../components/CardFeed/CardFeed.styled'
import { ContainerPost, InputBody, ButtonComment } from './PostPage-styled'
import Like from "../../assets/like.svg"
import Dislike from "../../assets/dislike.svg"
import CommentBox from "../../assets/comments.svg"

export default function PostPage() {
  useProtectedPage()
  const params = useParams()
  const [refresh, setRefresh] = useState(false)
  const postInfo = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`, refresh)
  const { form, onChange, cleanFields } = useForm({ body: "" })

  const [post, setPost] = useState({})

  useEffect(() => {
    const postLocal = JSON.parse(localStorage.getItem("post"))
    postLocal && setPost(postLocal)
  }, [])

  const onSubmitForm = (event) => {
    event.preventDefault()
    addComment(form, cleanFields, params.id, refresh, setRefresh)
  }


  return (
    <div>
      <ContainerPost>
        <ContainerCardFeed >
          <TextName>Enviado por: {post.username}</TextName>
          <TextBody>{post.body}</TextBody>
          <SectionClick>
            <SectionLike>
              <img src={Like} />
              <p>{post.voteSum}</p>
              <img src={Dislike} />
            </SectionLike>
            <SecttionComment>
              <img src={CommentBox} />
              <p>{post.commentCount}</p>
            </SecttionComment>
          </SectionClick>
        </ContainerCardFeed>
      </ContainerPost>
      <form onSubmit={onSubmitForm}>
        <InputBody name={"body"}
          value={form.body}
          onChange={onChange}
          placeholder="Adicionar comentário"
          required
        />
        <ButtonComment>Responder</ButtonComment>
      </form>
      <CardPostPage postInfo={postInfo} />
    </div>
  )
}
