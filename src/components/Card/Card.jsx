import React, { useState } from 'react'
import CardWrapper from './CardWrapper'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowRightArrowLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactCardFlip from 'react-card-flip'


function Card() {
  const [isFlipped, setFlip] = useState(false);

  const handleFLip = () => {
    if (isFlipped) {
      setFlip(false);
    } else {
      setFlip(true);
    }
  }

  return (

    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <CardWrapper>
        <h2>Flashy</h2>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={handleFLip}/>
      </CardWrapper>

      <CardWrapper>
        <h3>Change the way you study. Use Flashy.</h3>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={handleFLip}/>
      </CardWrapper>
    </ReactCardFlip>
  )
}

export default Card