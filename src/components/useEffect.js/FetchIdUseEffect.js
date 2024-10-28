import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchIdUseEffect() {
    const[post, setPost] = useState([])
    const[id, setId] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.org/posts/${id}`)
        .then(res=>{ console.log(res.data);
            setPost(res.data)
        })
        .catch(err =>{ console.log(err); });
        
    },[id])
  return (
    <div>
        <input type='text' onChange={(e)=>setId(e.target.value)} value={id}></input>
        {post.title}
        {/* <ul>
        {
            posts.map(post =><li key={post.id}>{post.value}</li>)
        }
        </ul> */}
    </div>
  )
}

export default FetchIdUseEffect