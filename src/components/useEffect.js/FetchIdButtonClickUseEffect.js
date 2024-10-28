import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchIdButtonClickUseEffect() {
    const[post, setPost] = useState([])
    const[id, setId] = useState(1)
    const[idFromButtonClick, setIdFromButtonClick]= useState(1)


    const handleClick=()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.org/posts/${idFromButtonClick}`)
        .then(res=>{ console.log(res.data);
            setPost(res.data)
        })
        .catch(err =>{ console.log(err); });
        
    },[idFromButtonClick])
 
  return (
    <div>
        <input type='text' onChange={(e)=>setId(e.target.value)} value={id}></input>
        <button onClick={handleClick}>FetchId</button>
        {post.title}
        {/* <ul>
        {
            posts.map(post =><li key={post.id}>{post.value}</li>)
        }
        </ul> */}
    </div>
  )
}

export default FetchIdButtonClickUseEffect