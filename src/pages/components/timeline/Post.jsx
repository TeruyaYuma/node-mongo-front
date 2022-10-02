import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Favorite , FavoriteBorder} from '@mui/icons-material'

export const Post = ({post}) => {
    const [user, setUser] = useState()
    console.log(post)
    useEffect(() => {
      const get = async() => {
        const response = await axios.get(`/users/${post.userId}`)
        setUser(response.data)
      }
        get()
    },[post.userId])
    return (
      <div style={{border: '1px solid black', marginBottom: 5}}>
        {user && (
          <>
            <div>{user.profilePicture ? 'isImg' : 'noImg'}</div>
            <div>name: {user.username}</div>
            <div>desc: {post.desc}</div>
            <div>
              {post.likes.length || '0'}いいね
              {
                post.likes.some(userId => userId === user._id)
                ? <Favorite />
                : <FavoriteBorder />
              }
            </div>
          </>
        )}
      </div>
    )
}