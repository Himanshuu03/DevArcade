import cross from "../assets/cross.png";
import circle from "../assets/circle.png";
import {useRef, useState } from 'react';
import {toast} from 'react-toastify';
let gameGird = ["","","","","","","","",""];

function TicTacToe() {
  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let titleRef = useRef(null);
  let [winCheck,setWinCheck] = useState(false);
  let box0 = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);

  let allBoxes = [box0,box1,box2,box3,box4,box5,box6,box7,box8];
  const toggle = (e,num) =>{
    let check = false;
    if(lock){
      return 0;
    }
    if(gameGird[num] === ""){
      if(count%2 === 0){
        e.target.innerHTML = `<img src="${cross}" style="margin: 40px;" />`;
        gameGird[num] = "X";
        setCount(count+1);
      }else{
        e.target.innerHTML = `<img src="${circle}" style="margin: 40px;" />`;
        gameGird[num] = "O";
        setCount(count+1);
      }
    }else{
      toast.error("Invalid Move",{
        position: "top-center",
      });
    }
    checkWinner();
    gameGird.forEach((box)=>{
      if(box === ""){
        check = true;
      }
    })
    console.log(check);
    if(!check && !winCheck){
      toast.error("Draw,Game-Over",{
        position: "top-center",
      });
      resetHandler();
      return 0;
    }
  }
  const checkWinner = () =>{
    if(gameGird[0] === gameGird[1] && gameGird[1] === gameGird[2] && gameGird[2] !== ""){
      won(gameGird[0]);
    }
    else if(gameGird[3] === gameGird[4] && gameGird[4] === gameGird[5] && gameGird[5] !== ""){
      won(gameGird[3]);
    }
    else if(gameGird[6] === gameGird[7] && gameGird[7] === gameGird[8] && gameGird[8] !== ""){
      won(gameGird[6]);
    }
    else if(gameGird[0] === gameGird[3] && gameGird[3] === gameGird[6] && gameGird[6] !== ""){
      won(gameGird[0]);
    }
    else if(gameGird[1] === gameGird[4] && gameGird[4] === gameGird[7] && gameGird[7] !== ""){
      won(gameGird[1]);
    }
    else if(gameGird[2] === gameGird[5] && gameGird[5] === gameGird[8] && gameGird[8] !== ""){
      won(gameGird[2]);
    }
    else if(gameGird[0] === gameGird[4] && gameGird[4] === gameGird[8] && gameGird[8] !== ""){
      won(gameGird[0]);
    }
    else if(gameGird[2] === gameGird[4] && gameGird[4] === gameGird[6] && gameGird[6] !== ""){
      won(gameGird[2]);
    }
  }
  const won = (winner)=>{
    setLock(true);
    if(winner === "X"){
      toast.success("Player 1 Won",{
        position: "top-center",
      });
      titleRef.current.innerHTML = "Congratulations Player 1 Won";
    }else{
      toast.success("Player 2 Won",{
        position: "top-center",
      });
      titleRef.current.innerHTML = "Congratulations Player 2 Won";
    }
    setWinCheck(true);
    }
    const resetHandler = () =>{
      setLock(false);
      titleRef.current.innerHTML = "Tic Tac Toe";
      gameGird = ["","","","","","","","",""];
      setCount(0);
      allBoxes.forEach((box)=>{
        box.current.innerHTML = "";
      })
      setWinCheck(false);
    }
  return (
    <div className='bg-slate-900'>

      <div className="text-center h-screen w-screen"> 
        <h1 className="mt-12 text-white text-6xl flex justify-center items-center mb-5" ref={titleRef}>Tic Tac Toe</h1>
        <div className="flex m-auto justify-center gap-1"> 
          <div className="">
            <div className="flex h-36 w-36 bg-slate-600 border-solid border-black rounded-xl cursor-pointer mb-1" onClick={(e)=>{toggle(e,0)}} ref={box0}></div>
            <div className="flex h-36 w-36 bg-slate-600 border-solid border-black rounded-xl cursor-pointer mb-1" onClick={(e)=>{toggle(e,1)}} ref={box1}></div>
            <div className="flex h-36 w-36 bg-slate-600 border-solid border-black rounded-xl cursor-pointer mb-1" onClick={(e)=>{toggle(e,2)}} ref={box2}></div>
          </div>
          <div className="">
            <div className="flex h-36 w-36 bg-slate-600 border-solid border-black rounded-xl cursor-pointer mb-1" onClick={(e)=>{toggle(e,3)}} ref={box3}></div>
            <div className="flex h-36 w-36 bg-slate-600 border-solid border-black rounded-xl cursor-pointer mb-1" onClick={(e)=>{toggle(e,4)}} ref={box4}></div>
            <div className="flex h-36 w-36 bg-slate-600 border-solid border-black rounded-xl cursor-pointer mb-1" onClick={(e)=>{toggle(e,5)}} ref={box5}></div>
          </div>
          <div className="">
            <div className="flex h-36 w-36 bg-slate-600 border-solid border-black rounded-xl cursor-pointer mb-1" onClick={(e)=>{toggle(e,6)}} ref={box6}></div>
            <div className="flex h-36 w-36 bg-slate-600 border-solid border-black rounded-xl cursor-pointer mb-1" onClick={(e)=>{toggle(e,7)}} ref={box7}></div>
            <div className="flex h-36 w-36 bg-slate-600 border-solid border-black rounded-xl cursor-pointer mb-1" onClick={(e)=>{toggle(e,8)}} ref={box8}></div>
          </div>
        </div>
        <button className="w-60 h-20 border-none outline-none cursor-pointer rounded bg-slate-700 text-2xl text-white mt-6 mb-12" onClick={resetHandler}>
          Reset
        </button>
      </div>

    </div>
  )
}

export default TicTacToe