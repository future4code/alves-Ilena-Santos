import React from 'react'
import { ContainerCardFeed, ContainerCards, SectionClick, SectionLike, SectionComment, TextName, TextBody } from './CardFeed.styled'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../routes/cordinator'
import Like from "../../assets/like.svg"
import Dislike from "../../assets/dislike.svg"
import CommentBox from "../../assets/comments.svg"

export default function CardFeed(props) {
    const navigate = useNavigate()

    const postsList = props.posts.map((post) => {
        return (
            <ContainerCardFeed key={post.id} >
                <TextName>Enviado por: {post.username}</TextName>
                <TextBody>{post.body}</TextBody>
                <SectionClick>
                    <SectionLike>
                        <button onClick={() => { props.like(post.id) }}>
                            <img src={Like} />
                        </button>
                        <p>{post.voteSum}</p>
                        <button onClick={() => { props.dislike(post.id) }}>
                            <img src={Dislike} />
                        </button>
                    </SectionLike>
                    <SectionComment onClick={() => { goToPost(navigate, post.id) }}>
                        <img src={CommentBox} />
                        <p>{post.commentCount}</p>
                    </SectionComment>
                </SectionClick>
            </ContainerCardFeed>
        )
    })

    return (
        <ContainerCards>{postsList}</ContainerCards>
    )
}
