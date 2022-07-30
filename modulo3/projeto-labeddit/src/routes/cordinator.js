
export const goToLogin =(navigate)=>{
    navigate("/")
}

export const goToSignUp =(navigate)=>{
    navigate("/cadastro")
}

export const goToFeed =(navigate)=>{
    navigate("/feed")
}

export const goToPost =(navigate,id)=>{
navigate(`/posts/${id}`)
}

