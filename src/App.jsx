import React, {useState} from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [photos, setphoto] = useState([])


  axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
    const postItem = res.data;
    setPosts(postItem)
  })


  return (
    <main>

    {posts.map(post => {
      return <div className='post' key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <img src={image.url}/>
      </div>
    })}
    </main>
  )
}

export default App;