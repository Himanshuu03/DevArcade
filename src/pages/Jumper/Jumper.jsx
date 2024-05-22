import { useEffect, useState, useRef } from "react";
import { jumperground } from "../../API/images";
import './Jumper.css';

function Jumper() {
  const [jump, setJump] = useState(false);
  const [score,setScore] = useState(0);

  const jumperRef = useRef(null);
  const hurdleRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ' && !jump) {
        setJump(true);
        setScore((prev)=>{
          return prev +1;
        });  
        setTimeout(() => {
          setJump(false);
        }, 500);
      }
      event.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const checkDead = setInterval(() => {
      const character = jumperRef.current;
      const hurdle = hurdleRef.current;

      if (character && hurdle) {
        const characterRect = character.getBoundingClientRect();
        const hurdleRect = hurdle.getBoundingClientRect();

        if (
          hurdleRect.left < characterRect.right &&
          hurdleRect.right > characterRect.left &&
          hurdleRect.top < characterRect.bottom &&
          hurdleRect.bottom > characterRect.top
        ) {
          titleRef.current.innerHTML = `Your score is ${score}`;
          hurdle.style.display = 'none';
          clearInterval(checkDead);
        }
      }
    }, 10);

    return () => clearInterval(checkDead);
  }, [score]);

  const resetHandler =() =>{
    setScore(0);
    titleRef.current.innerHTML="Jumper";
    const hurdle = hurdleRef.current;
    hurdle.style.display = 'flex';
  }
  return (
    <> 
    <h1 className="text-white text-6xl mb-11 text-center" ref={titleRef}>Jumper</h1>
      <div className="flex h-screen items-center relative flex-col">
        <div className="bg-white w-[700px] h-[400px] bg-jumperbg relative">
          <img src={jumperground} className="w-[700px] h-[60px] relative top-[340px]" />
          <div ref={jumperRef} className={`bg-green-400 w-[55px] h-[55px] relative rounded-full top-[225px] left-40 ${jump ? 'jumper' : ''}`}></div>
          <div ref={hurdleRef} className='relative top-[185px] left-[638px] hardle0 w-[40px] h-[40px] bg-red-900'></div>
        </div>
        <div>
          <button className="w-60 h-20 border-none outline-none cursor-pointer rounded bg-slate-700 text-2xl text-white mt-6" onClick={resetHandler}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Jumper;
