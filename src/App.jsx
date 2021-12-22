import React, {useState} from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [photos, setPhotos] = useState([])


  axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
    const photoItem = res.data;
    setPhotos(photoItem)
  })


  return (
    <main>

    {photos.map(photo => {
      return <div className='photo' key={photo.id}>
      <h1>{photo.title}</h1>
      <img src={photo.url}/>
      <img src={photo.thumbnailUrl}/>
      </div>
    })}
    </main>
  )
}

export default App;