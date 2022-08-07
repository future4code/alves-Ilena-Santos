import React from 'react'
import { ContainerCardFeed, ContainerCards, SectionClick, SectionLike, SectionComment, TextName, TextBody } from './CardFeed.styled'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../routes/cordinator'
import Like from "../../assets/like.svg"
import LikeGrey from "../../assets/likeGrey.jpeg"
import Dislike from "../../assets/dislike.svg"
import DislikeGrey from "../../assets/dislikeGrey.jpeg"
import CommentBox from "../../assets/comments.svg"

export default function CardFeed(props) {
    const navigate = useNavigate()

    const postsList = props.posts.map((post) => {

        const imgLike = () =>{
            if (post.userVote === 1) {
                return  <img src={LikeGrey} alt="seta cinza para cima" />
            } else  {
                return  <img src={Like} alt="seta para cima" />
            }
        }
    
        const imgDislike = () =>{
            if (post.userVote === -1) {
                return  <img src={DislikeGrey} alt="seta cinza para baixo"/>
            } else  {
                return  <img src={Dislike} alt="seta para baixo" />
            }
        }
        return (
            <ContainerCardFeed key={post.id} >
                <TextName>Enviado por: {post.username}</TextName>
                <TextBody>{post.body}</TextBody>
                <SectionClick>
                    <SectionLike>
                        <button onClick={() => { props.like(post.id) }}>
                            {imgLike()}
                        </button>
                        <p>{post.voteSum}</p>
                        <button onClick={() => { props.dislike(post.id) }}>
                            {imgDislike()}
                        </button>
                    </SectionLike>
                    <SectionComment onClick={() => { goToPost(navigate, post.id) }}>
                        <img src={CommentBox} alt="imagem caixa de comentário"/>
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
