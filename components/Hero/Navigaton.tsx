import React from 'react';
import  './Hero.css';

interface NavigationProps {
  totalSlides: number;
  currentSlide: number;
  onNavigate: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ totalSlides, currentSlide, onNavigate }) => {
  return (
    <ul className='Nav'>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <li
          key={index}
          className={`navSlide ${index === currentSlide ? 'navActive' : ''}`}
          onClick={() => onNavigate(index)}
        ></li>
      ))}
    </ul>
  );
};

export default Navigation;
