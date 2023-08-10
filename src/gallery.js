import {useState} from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex]= useState(0);
  const [showMore,setshowMore]= useState('');
  

  function handleClick(){
    setIndex(index + 1);
  }

  function handleprevclick(){
    setIndex(index - 1);
  }
  
  function handleMoreClick(){
    setshowMore(!showMore)
  }

  let sculpture = sculptureList[index];
  return (
    <>
    {index != sculptureList.length-1 &&
      <button onClick={handleClick}>
        Next
      </button>}
    {index > 0 &&
    <button onClick={handleprevclick}>
    Prev
    </button>}
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
     
      <button onClick={handleMoreClick}>
        {showMore ? 'hide' : 'show'} details

      </button>
      {showMore && <p> {sculpture.description} </p>}<br>
      </br>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
