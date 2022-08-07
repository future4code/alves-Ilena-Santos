import React, { useState } from 'react'
import axios from "axios"
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from "../../constants/urls"
import CardFeed from '../../components/CardFeed/CardFeed'
import useForm from '../../hooks/useForm'
import { addPost } from '../../services/posts'
import { InputTitle, ButtonPost, ImgLine, ImgLoading, TextAreaBody } from "./FeedPage-styled"
import Line from "../../assets/Line.svg"


export default function FeedPage() {
  useProtectedPage()
  const [refresh, setRefresh] = useState(false)
  const [likePost, setLikePost] = useState(false)
  const [dislikePost, setDislikePost] = useState(false)
  const [arrowColor, setArrowColor] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const posts = useRequestData([], `${BASE_URL}/posts?size=100`, refresh, setIsLoading)

  const { form, onChange, cleanFields } = useForm({ title: "", body: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    addPost(form, cleanFields, setRefresh, refresh)
  }

  const token = localStorage.getItem("token")

  const like = (id) => {
    if (likePost === true) {
      removeVote(setLikePost, likePost, id)
      setLikePost(!likePost)
    } else {
      const body = {
        direction: 1
      }
      axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          setLikePost(!likePost)
          setRefresh(!refresh)
          setArrowColor(!arrowColor)
        })
        .catch((err) => {
        })
    }
  }

  const dislike = (id) => {
    if (dislikePost === true) {
      removeVote(setDislikePost, dislikePost, id)
      setDislikePost(!dislikePost)
    } else {
      const body = {
        direction: -1
      }
      axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
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

  const removeVote = (setVote, voteName, id) => {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
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


  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <InputTitle name={"title"}
          value={form.title}
          onChange={onChange}
          placeholder="Título da postagem"
          required
        />
        <TextAreaBody name={"body"}
          value={form.body}
          onChange={onChange}
          placeholder="Escreva seu post..."
          required
        />
        <ButtonPost>Postar</ButtonPost>
      </form>
      <ImgLine src={Line} alt={"linha colorida"}/>
      <CardFeed posts={posts} like={like} dislike={dislike} arrowColor={arrowColor}/>
    </div>

  )
}
