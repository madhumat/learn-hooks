import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchUseEffect() {
    const[posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.org/posts')
        .then(res=>{ console.log(res.data);
            setPosts(res.data)
        })
        .catch(err =>{ console.log(err); });
        
    },[])
  return (
    <div>
        <ul>
        {
            posts.map(post =><li key={post.id}>{post.title}</li>)
        }
        </ul>
    </div>
  )
}

export default FetchUseEffect