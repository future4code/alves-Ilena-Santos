import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import PostPage from '../pages/PostPage/PostPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'

export default function Router() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route index exact path ="/" element={<FeedPage/>}/>
            <Route path ="/login" element={<LoginPage/>}/>
            <Route path ="/cadastro" element={<SignUpPage/>}/>
            <Route path ="/feed/:number" element={<FeedPage/>}/>
            <Route path ="/posts/:id" element={<PostPage/>}/>
            <Route path ="*" element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

