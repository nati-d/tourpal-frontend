import React from 'react';
import './Hero.css';

interface SlideProps {
  city: string;
}

const Slide: React.FC<SlideProps> = ({ city }) => {
  const cityChunks = city.match(/.{1,4}/g) || [];

  return (
    <div className='slide'>
      <div className='darkBg'></div>
      <div className='textWrapper'>
        <div className='letter'>{city.charAt(0)}</div>
        {cityChunks.map((chunk, index) => (
          <div key={index} className='text'>
            {chunk}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
