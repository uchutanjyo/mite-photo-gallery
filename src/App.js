import React, {useState , useEffect} from 'react';
import './styles/App.css';
import {items} from './data'

function App() {

  const [photos, setPhotos] = useState(items)
  const [index, setIndex] = useState(0)


  const incOrDec = (e) => {
    const clickedBtn = e.target.textContent;
    if ((clickedBtn == 'R') && (index <= (photos.length -2))) {
      setIndex(index + 1)
      console.log(index)
    }
    else if ((clickedBtn == 'R') && (index > (photos.length -2)))  {
      setIndex(0)
    }
    else if ((clickedBtn == 'L') && (index === 0))  {
      setIndex(photos.length -1)
    }
    else if ((clickedBtn == 'L') && (index > 0))  {
      setIndex(index - 1)
    }
  }
  // the entire above section was coded slightly differently than last time i made something similar. simply, i used e.target.textContent rather than 'type' to determine what the function does. in other words, this time around, the incOrDec (increment or decrement) function does not take any arguments (just the event object) - the selected condition is based on the textContent of the button clicked.
  
   const {description, id, url} = photos
return (
    <>  
 
  <div className='main'>
      <h1>mite - photo gallery 1</h1>

      <div className='photo-viewer'>
        <div className='btn-container'>  
            <h6>Click an arrow</h6>
        <button onClick={incOrDec}>L</button>
          <button onClick={incOrDec}>R</button></div>
      
      <div className='photo-viewer-photo'>
      
     <img src= {photos[index].url}/>
     <div className='description'> {photos[index].description} </div>

      </div>

      </div>
  </div>


    
</>
)}
  


export default App;
