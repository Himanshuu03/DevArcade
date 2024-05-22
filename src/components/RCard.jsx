/* eslint-disable react/prop-types */
import { cover } from "../API/images";
import "./RCard.css";

function RCard({card,handleChoice,flipped,disabled}) {
    const handleClick = ()=>{
        if(!disabled){
            handleChoice(card);
        }else{
            return;
        }
    }
  return (
    <div className="relative">
        <div className={flipped ? "flipped" : ""}>
            <img className="w-36 h-36 block border-2 border-solid border-white rounded-md absolute transition-all ease-in duration-200 delay-200 front" src={card.src} alt="card"/>  
            <img className="w-36 h-36 block border-2 border-solid border-white rounded-md transition-all ease-in duration-200 delay-200 back" src={cover} alt="cover" onClick={handleClick} />
        </div>
    </div>
  )
}

export default RCard