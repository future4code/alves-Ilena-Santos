import React, { useState } from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from "../../constants/urls"
import CardFeed from '../../components/CardFeed/CardFeed'
import useForm from '../../hooks/useForm'
import { addPost } from '../../services/posts'

export default function FeedPage() {
  useProtectedPage()
  const [refresh, setRefresh] = useState(false)
  const posts = useRequestData([],`${BASE_URL}/posts`, refresh)

  const {form, onChange, cleanFields} = useForm({title:"", body: ""})


  const onSubmitForm = (event)=>{
    event.preventDefault()
    addPost(form , cleanFields, setRefresh, refresh)
  }

  return (
    <div>
      <h1>FeedPage</h1>
      <form onSubmit={onSubmitForm}>
      <input name={"title"}
        value={form.title}
        onChange={onChange}
        placeholder = "Título da postagem"
        required
        />
        <input name={"body"}
        value={form.body}
        onChange={onChange}
        placeholder = "Escreva seu post..."
        required
        />
        <button>Postar</button>
      </form>
      <CardFeed posts={posts}/>
    </div>
    
  )
}
