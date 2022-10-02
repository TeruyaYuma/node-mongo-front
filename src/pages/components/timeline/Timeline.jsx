import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Post } from './Post'

export const Timeline = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      const get = async() => {
        const response = await axios.get('/post/timeline/6325572f28840d9d8165c871')
        setPosts(response.data)
      }
        get()
    },[])
    return (
      <div>
        <h1>posts</h1>
        {posts && posts.map((post) => (
            <div key={post._id}>
                <Post post={post}/>
            </div>
          ))
        }
      </div>
    )
}