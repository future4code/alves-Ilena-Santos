import React from 'react'
import { ContainerCardFeed } from './CardFeed.styled'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../routes/cordinator'

export default function CardFeed(props) {
    const navigate = useNavigate()

const handleOnclick = (post,id) =>{
    localStorage.setItem("post", JSON.stringify(post))
    goToPost(navigate,id)
}

const postsList = props.posts.map((post)=>{
    return (
        <ContainerCardFeed key={post.id} onClick={()=>{handleOnclick(post,post.id)}}>
            <p>Enviado por: {post.username}</p>
            <p>{post.body}</p>
            <p>{post.voteSum}</p>
            <p>{post.commentCount}</p>
        </ContainerCardFeed>
    )
})

 
  return (
    <div>{postsList}</div>
  )
}
