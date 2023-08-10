import {useState} from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
//   let index = 0;
  const [index, setIndex]= useState(0);
  const [showMore,setshowMore]= useState('');
  

  function handleClick() {
    setIndex(index + 1);
  }

  function handleMoreClick(){
    setshowMore(!showMore)
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
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
