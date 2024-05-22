import games from "../API/games"
import { useEffect,useState } from "react"
import GameCard from "../components/GameCard";

function Landing() {
    const [gameData, setGameData] = useState(games);
    useEffect(()=>{
        setGameData(games);
    },[])
  return (
    <div className='bg-slate-900'>

        <div className='flex justify-center gap-3 mt-5 flex-wrap h-max w-screen'>
            {
                gameData.map((game)=>{
                    return(
                        <GameCard game={game} key={game.id}/>
                    )
                })
            }       
        </div>

    </div>
  )
}

export default Landing