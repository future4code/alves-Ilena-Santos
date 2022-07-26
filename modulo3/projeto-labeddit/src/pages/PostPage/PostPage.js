import React, {useState, useEffect} from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import {useParams} from "react-router-dom"
import CardPostPage from "../../components/CardPostPage/CardPostPage"
import useForm from '../../hooks/useForm'
import { addComment } from '../../services/comments'

export default function PostPage() {
  useProtectedPage()
  const params = useParams()
  const [refresh, setRefresh] = useState(false)
  const postInfo = useRequestData([],`${BASE_URL}/posts/${params.id}/comments`,refresh)
  const {form, onChange, cleanFields} = useForm({ body: ""})

  const [post, setPost] = useState({})

  useEffect (()=>{
    const postLocal = JSON.parse(localStorage.getItem("post"))
    postLocal && setPost(postLocal)
  },[])

  const onSubmitForm = (event)=>{
    event.preventDefault()
    addComment(form , cleanFields, params.id, refresh, setRefresh)
  }


  return (
    <div>
      <h1>PostPage</h1>
      <p>Enviado por: {post.username}</p>
      <p>{post.body}</p>
      <h3>Comentários:</h3>
      <form onSubmit={onSubmitForm}>
        <input name={"body"}
        value={form.body}
        onChange={onChange}
        placeholder = "Adicionar comentário"
        required
        />
        <button>Responder</button>
        </form>
      <CardPostPage postInfo={postInfo}/>
    </div>
  )
}
