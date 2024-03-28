import React, { useState, useEffect } from 'react';
import '../App.css'

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    transform: `translate(${position.x - 20}px, ${position.y - 20}px)`, // Adjusted by half the width and height of the circle
    transition: 'transform 0.1s ease-out',
  };
  

  return (
    <div className="relative">
      <div className="mouse-follower" style={style}>
        <p className='w-1 h-1 bg-white rounded-full absolute left-0 right-0 m-auto top-0 bottom-0'></p>
      </div>
    </div>
  );
}

export default MouseFollower;
