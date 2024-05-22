import { useEffect, useState } from "react";
import RCard from "../components/RCard";
import helmet from "../assets/helmet-1.png";
import sword from "../assets/sword-1.png";
import shield from "../assets/shield-1.png";
import scroll from "../assets/scroll-1.png";
import ring from "../assets/ring-1.png";
import potion from "../assets/potion-1.png";

const cardImages = [
    {"src" : helmet,matched:false},
    {"src" : potion,matched:false},
    {"src" : sword,matched:false},
    {"src" : shield,matched:false},
    {"src" : scroll,matched:false},
    {"src" : ring,matched:false}
]

function RecallRacer() {
    const [cards,setCards] = useState([]);
    const [turns,setTurns] = useState(0);
    const [choiceOne,setChoiceOne] = useState(null);
    const [choiceTwo,setChoiceTwo] = useState(null);
    const [disabled,setDisabled] = useState(false);

    const shuffleCards = () =>{
        const shuffledCards =[...cardImages,...cardImages].sort(()=>Math.random()-0.5).map((card)=>({...card,id:Math.random()}));
        setCards(shuffledCards);
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(0);
    }

    const handleChoice = (card) =>{
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    const resetTurns = () =>{
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevCount => prevCount + 1);
        setDisabled(false);
    }

    useEffect(()=>{
       if(choiceOne && choiceTwo){
        setDisabled(true);
        if(choiceOne.src === choiceTwo.src){
            setCards(prevCards => prevCards.map((card)=>{
                if(card.src === choiceOne.src){
                    return {...card,matched:true}
                }
                return card;
            }))
            resetTurns();
        }else{
            setTimeout(resetTurns,700);
        }
       } 
    },[choiceOne,choiceTwo])

    useEffect(()=>{
        shuffleCards();
    },[])
    console.log(choiceOne,choiceTwo);
  return (
    <div className="bg-slate-900">

        <div className="flex items-center flex-col">
            <h1 className="mt-12 text-white text-6xl flex justify-center items-center mb-5">Recall Racer</h1>
            <button className="w-60 h-20 border-none outline-none cursor-pointer rounded bg-slate-700 text-2xl text-white mt-6 mb-12" onClick={shuffleCards}>
                New Game
            </button>
            <div className="text-white text-3xl">
                Turns : {turns}
            </div>
            <div className="grid gap-5 mt-10 grid-cols-4">
                {
                    cards.map((card)=>{
                        return <RCard card={card} key={card.id} handleChoice = {handleChoice} flipped = {card === choiceOne || card === choiceTwo || card.matched} disabled={disabled}/>
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default RecallRacer