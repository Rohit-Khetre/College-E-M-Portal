import React from 'react';
import Lottie from 'lottie-react';
import characterAnimation from '../assets/character.json';

const AnimatedCharacter = () => {
  return (
    <div style={{ maxWidth: '100%', height: 'auto' }}>
      <Lottie
        animationData={characterAnimation}
        loop={true}
        style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
      />
    </div>
  );
};

export default AnimatedCharacter;