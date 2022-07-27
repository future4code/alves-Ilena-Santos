import React from 'react'
import { ContainerCardFeed, ContainerCards, SectionClick, SectionLike, SecttionComment, TextName, TextBody } from './CardFeed.styled'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../routes/cordinator'
import Like from "../../assets/like.svg"
import Dislike from "../../assets/dislike.svg"
import CommentBox from "../../assets/comments.svg"

export default function CardFeed(props) {
    const navigate = useNavigate()

    const handleOnclick = (post, id) => {
        localStorage.setItem("post", JSON.stringify(post))
        goToPost(navigate, id)
    }

    

    const postsList = props.posts.map((post) => {
        return (
            <ContainerCardFeed key={post.id} >
                <TextName>Enviado por: {post.username}</TextName>
                <TextBody>{post.body}</TextBody>
                <SectionClick>
                    <SectionLike>
                        <button onClick={()=>{props.like(post.id)}}>
                            <img src={Like} />
                        </button>
                        <p>{post.voteSum}</p>
                        <button onClick={()=>{props.dislike(post.id)}}>
                            <img src={Dislike} />
                        </button>
                    </SectionLike>
                    <SecttionComment onClick={() => { handleOnclick(post, post.id)}}>
                        <img src={CommentBox} />
                        <p>{post.commentCount}</p>
                    </SecttionComment>
                </SectionClick>
            </ContainerCardFeed>
        )
    })


    return (
        <ContainerCards>{postsList}</ContainerCards>
    )
}
