import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'

export default function FeedPage() {
  useProtectedPage()

  return (
    <div>FeedPage</div>
  )
}
