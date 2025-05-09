import { useEffect, useState } from 'react'
import ImgItem from './ImgItem';
import './App.css'


function App() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [elementId, setElementId] = useState([])
  // const [clicked, setClicked] = useState(false)

  useEffect(() => {
    fetch('https://api.unsplash.com/photos?count=9&client_id=tSLd7ySWRw0xAp8K_iDjAQImbVt63z24hmVlomlJp70')
    .then(res => res.json())
    .then(data => setImages(data))
    .catch(err => console.error(err))
  }, [])

  function handleShuffle(e) {
    const shuffle = [...images].sort(() => Math.random() - 0.5);
    setImages(shuffle);
    setScore(score + 1);
    setElementId(prev=> [...prev, e.target.id])

    if(elementId.includes(e.target.id)) {

      maxScore < score ? setMaxScore(score) : setMaxScore(maxScore);
      setScore(0);
      setElementId('');

    }
  }


  return (
    <div className='container'>
      <h1 style={{textAlign: 'center', fontSize: '60px'}}>Memory cards</h1>
      <div className='score__container'>
        <div className='score_element'>
          <p>Score:</p>
          <span className='score'>{score}</span>
        </div>
        <div className='score_element'>
          <p>Best score:</p>
          <span className='best__score'>{maxScore}</span>
        </div>
      </div>
      <div className="inner_container">
        {images.map((el) => (
          <ImgItem key={el.id} {...el} shuff={handleShuffle}/>
        ))}
      </div>
        
    </div>
   
  )
}

export default App
