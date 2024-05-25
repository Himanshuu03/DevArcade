import { useEffect, useRef, useState } from "react";
import carob3 from "../../assets/game-car-ob3.png";
import carob5 from "../../assets/game-car-ob5.png";
import maincar2 from "../../assets/main-car2.png";

import './RetroGear.css';

let checkCollision;

function RetroGear() {
  const [left, setLeft] = useState(260);
  const [top, setTop] = useState(475);
  const [score, setScore] = useState(0);

  const titleRef = useRef(null);
  const maincarRef = useRef(null);
  const obs1Ref = useRef(null);
  const obs2Ref = useRef(null);
  const obs3Ref = useRef(null);
  const obs4Ref = useRef(null);

  const startCollisionDetection = () => {
    checkCollision = setInterval(() => {
      const car = maincarRef.current;
      const obs1 = obs1Ref.current;
      const obs2 = obs2Ref.current;
      const obs3 = obs3Ref.current;
      const obs4 = obs4Ref.current;

      if (car && obs1 && obs2 && obs3 && obs4) {
        const carRect = car.getBoundingClientRect();
        const obstacles = [obs1, obs2, obs3, obs4];

        for (const obs of obstacles) {
          const obsRect = obs.getBoundingClientRect();

          if (
            carRect.left < obsRect.right &&
            carRect.right > obsRect.left &&
            carRect.top < obsRect.bottom &&
            carRect.bottom > obsRect.top
          ) {
            obstacles.forEach(obs => {
              obs.style.display = 'none';
            });
            titleRef.current.innerHTML = `Your score is ${score}`;
            clearInterval(checkCollision);
            break;
          }
        }
      }
    }, 10);
  };

  useEffect(() => {
    startCollisionDetection();

    return () => clearInterval(checkCollision);
  }, [score]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setScore(prev => prev + 1); 
      if (event.key === 'ArrowUp' && top > 5) {
        setTop(prev => prev - 40);
      } else if (event.key === 'ArrowDown' && top < 475) {
        setTop(prev => prev + 40);
      } else if (event.key === 'ArrowLeft' && left > 70) {
        setLeft(prev => prev - 40);
      } else if (event.key === 'ArrowRight' && left < 475) {
        setLeft(prev => prev + 40);
      }
      event.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [top, left]);

  const resetPosition = () => {
    clearInterval(checkCollision);  // Clear the previous interval
    const obs1 = obs1Ref.current;
    const obs2 = obs2Ref.current;
    const obs3 = obs3Ref.current;
    const obs4 = obs4Ref.current;
    const obstacles = [obs1, obs2, obs3, obs4];
    obstacles.forEach(obs => {
      obs.style.display = 'flex';
    });
    titleRef.current.innerHTML = 'Retro Gear';
    setLeft(260);
    setTop(475);
    setScore(0);
    startCollisionDetection();  // Start a new interval for collision detection
  };

  return (
    <div>
      <div className="flex flex-col h-screen items-center gap-4 z-[1000]">
        <h1 className="text-5xl text-white mb-5" ref={titleRef}>Retro Gear</h1>
        <div className="bg-retrobg w-[600px] h-[600px] bg-center relative">
          <div ref={obs1Ref} className='absolute w-[80px] h-[120px] left-[70px] car1'>
            <img src={carob3} className="h-full w-full object-fit" />
          </div>
          <div ref={obs2Ref} className='absolute w-[80px] h-[120px] left-[200px] car2'>
            <img src={carob5} className="h-full w-full object-fit" />
          </div>
          <div ref={obs3Ref} className='absolute w-[80px] h-[120px] left-[320px] car3'>
            <img src={carob3} className="h-full w-full object-fit" />
          </div>
          <div ref={obs4Ref} className='absolute w-[80px] h-[120px] left-[450px] car4'>
            <img src={carob5} className="h-full w-full object-fit" />
          </div>
          <div ref={maincarRef} className="absolute w-[80px] h-[120px] car" style={{
            left: `${left}px`,
            top: `${top}px`,
          }}>
            <img src={maincar2} className="h-full w-full object-fit" />
          </div>
        </div>
        <button 
          className="w-60 h-20 border-none outline-none cursor-pointer rounded bg-slate-700 text-2xl text-white mt-1"
          onClick={resetPosition}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default RetroGear;
