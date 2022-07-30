import React, { useState } from 'react'
import axios from "axios"
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { useParams } from "react-router-dom"
import CardPostPage from "../../components/CardPostPage/CardPostPage"
import useForm from '../../hooks/useForm'
import { addComment } from '../../services/comments'
import { ContainerCardFeed, TextName, TextBody, SectionClick, SectionLike, SectionComment } from '../../components/CardFeed/CardFeed.styled'
import { ContainerPost, ButtonComment, ContainerPage, Comments, ImgLoading, TextAreaBody } from './PostPage-styled'
import Like from "../../assets/like.svg"
import LikeGrey from "../../assets/likeGrey.jpeg"
import Dislike from "../../assets/dislike.svg"
import DislikeGrey from "../../assets/dislikeGrey.jpeg"
import CommentBox from "../../assets/comments.svg"
import Loading2 from "../../assets/loading2.gif"

export default function PostPage() {
  useProtectedPage()
  const params = useParams()
  const [refresh, setRefresh] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const posts = useRequestData([], `${BASE_URL}/posts?size=100`, refresh, setIsLoading)
  const postInfo = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`, refresh, setIsLoading)
  const { form, onChange, cleanFields } = useForm({ body: "" })

  const [likePost, setLikePost] = useState(false)
  const [dislikePost, setDislikePost] = useState(false)
  const [likeComment, setLikeComment] = useState(false)
  const [dislikeComment, setDislikeComment] = useState(false)


  const onSubmitForm = (event) => {
    event.preventDefault()
    addComment(form, cleanFields, params.id, refresh, setRefresh)
  }

  const token = localStorage.getItem("token")

  // POST VOTE 

  const likeChosenPost = () => {
    if (likePost === true) {
      removeVoteChosenPost(setLikePost, likePost, params.id)
      setLikePost(!likePost)
    } else {
      const body = {
        direction: 1
      }
      axios.post(`${BASE_URL}/posts/${params.id}/votes`, body, {
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          setLikePost(!likePost)
          setRefresh(!refresh)
        })
        .catch((err) => {
        })
    }
  }

  const dislikeChosenPost = (id) => {
    if (dislikePost === true) {
      removeVoteChosenPost(setDislikePost, dislikePost, id)
      setDislikePost(!dislikePost)
    } else {
      const body = {
        direction: -1
      }
      axios.put(`${BASE_URL}/posts/${params.id}/votes`, body, {
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          setDislikePost(!dislikePost)
          setRefresh(!refresh)
        })
        .catch((err) => {
        })
    }
  }

  const removeVoteChosenPost = (setVote, voteName, id) => {
    axios.delete(`${BASE_URL}/posts/${params.id}/votes`, {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        setVote(!voteName)
        setRefresh(!refresh)
      })
      .catch((err) => {
      })
  }


  // COMMENT VOTE

  const like = (id) => {
    if (likeComment === true) {
      removeVote(setLikeComment, likeComment, id)
      setLikeComment(!likeComment)
    } else {
      const body = {
        direction: 1
      }
      axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          setLikeComment(!likeComment)
          setRefresh(!refresh)
        })
        .catch((err) => {
        })
    }
  }

  const dislike = (id) => {
    if (dislikeComment === true) {
      removeVote(setDislikeComment, dislikeComment, id)
      setDislikeComment(!dislikeComment)
    } else {
      const body = {
        direction: -1
      }
      axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          setDislikeComment(!dislikeComment)
          setRefresh(!refresh)
        })
        .catch((err) => {
        })
    }
  }

  const removeVote = (setVote, voteName, id) => {
    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        setVote(!voteName)
        setRefresh(!refresh)
      })
      .catch((err) => {
      })
  }

  const chosenPost = posts.map((post) => {
    if (post.id === params.id) {
      const imgLike = () => {
        if (post.userVote === 1) {
          return <img src={LikeGrey} alt="seta cinza para cima"/>
        } else {
          return <img src={Like} alt="seta para cima" />
        }
      }

      const imgDislike = () => {
        if (post.userVote === -1) {
          return <img src={DislikeGrey} alt="seta cinza para baixo" />
        } else {
          return <img src={Dislike} alt="seta para baixo" />
        }
      }
      return (
        <ContainerCardFeed key={post.id}>
          <TextName>Enviado por: {post.username}</TextName>
          <TextBody>{post.body}</TextBody>
          <SectionClick>
            <SectionLike>
              <button onClick={() => { likeChosenPost(post.id) }}>
                {imgLike()}
              </button >
              <p>{post.voteSum}</p>
              <button onClick={() => { dislikeChosenPost(post.id) }} >
                {imgDislike()}
              </button>
            </SectionLike>
            <SectionComment>
              <img src={CommentBox} alt="imagem caixa de comentário" />
              <p>{post.commentCount}</p>
            </SectionComment>
          </SectionClick>
        </ContainerCardFeed>
      )
    } else {
      return (<div key={post.id}></div>)
    }
  })

  return (
    <ContainerPage>
      <ContainerPost>
        {isLoading ? <ImgLoading src={Loading2} /> : <>{chosenPost}</>}
      </ContainerPost>
      <form onSubmit={onSubmitForm}>
        <TextAreaBody name={"body"}
          value={form.body}
          onChange={onChange}
          placeholder="Adicionar comentário"
          required
        />
        <ButtonComment>Responder</ButtonComment>
      </form>
      <Comments>
        <CardPostPage postInfo={postInfo} like={like} dislike={dislike} />
      </Comments>
    </ContainerPage>
  )
}
