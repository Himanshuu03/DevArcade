import { useEffect, useRef, useState } from "react"
import axios from 'axios';
import { Spinner } from "../components/Spinner";
import {toast} from 'react-toastify';

function Science() {
    const [scienceQuiz,setScienceQuiz] = useState([]);
    const [scienceQuizCheck,setScienceQuizCheck] = useState(false);
    const [loading,setLoading] = useState(true);
    const [randomElementsSet,setRandomElementsSet] = useState([]);
    const [count,setCount] = useState(0);
    const [render,setRender] = useState(false);
    const [score,setScore] = useState(0);
    const [correct,setCorrect] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionFalse, setSelectedOptionFalse] = useState(null);
    let titleRef = useRef(null);
    useEffect(() => {
        const getScienceQuiz = async () => {
            const result = await axios.get("https://quiz-api-delta.vercel.app/scienceQuestions");
            const data = result.data;
            setScienceQuiz(data);
            setLoading(false);
        }
        getScienceQuiz();
    }, [render]);
    
    useEffect(() => {
        function selectRandomElements(array, num) {
            const arrayCopy = array.slice();
            for (let i = arrayCopy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
            }
            setScienceQuizCheck(true);
            setCorrect(arrayCopy[count].answer);
            return arrayCopy.slice(0, num);
        }
        if (scienceQuiz.length > 0) {
            setRandomElementsSet(selectRandomElements(scienceQuiz, 10));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scienceQuiz]);

    const changeHandler = () => { 
        if(count === 9){ 
            setCorrect(null);
            setScore(score);
            titleRef.current.innerHTML = "You have completed the quiz with "+score+" points";
            return;
         }
        setCount((count)=>{
            setCorrect(randomElementsSet[count+1].answer);
            return count+1;
        });
    }

    const answerHandler = (option) => {
        if (option === correct) {
            setScore((old)=>{
                return old+10;
            });
            setSelectedOption(option);
            setSelectedOptionFalse(null);
            changeHandler();
        } else {
            setScore((old)=>{
                return old-5;
            });
            setSelectedOption(null);
            setSelectedOptionFalse(option);
        }
    }
    const resetHandler = ()=>{
        toast.success("Quiz Restarted",{
            position:"top-center"
        })
        setRender(!render);
        setCount(0);
        setScore(0);
        titleRef.current.innerHTML = "Science Quiz";
    }  
  return (
    <div className="bg-slate-900">

        {
        loading ? <Spinner/> : !scienceQuizCheck ? <Spinner/> : (
            <div className="h-screen">
                <p className="text-right text-2xl text-white mr-3">Score  {score} </p>
                <h1 className="mt-12 text-white text-6xl flex justify-center items-center mb-5" ref={titleRef}>Science Quiz</h1>
                <div className="flex flex-col items-center">
                    <div className="bg-slate-500 text-center flex justify-center items-center flex-col max-w-max p-11 rounded-md">
                        <p className="text-white pb- text-3xl">{randomElementsSet[count].question}</p>
                        <div className="pt-4 flex gap-3">
                        {
                            randomElementsSet[count].options.map((option,index)=>{
                                return(
                                    <div key={index}  className="flex justify-center items-center gap-3 bg-slate-400 rounded-md">
                                        <button className={`p-6 pt-2 pb-2 ${selectedOption === option ? 'bg-green-400 text-white' : ''} ${selectedOptionFalse === option ? 'bg-red-400 text-white' : ''}`}onClick={() => { answerHandler(option); }}>
                                            {option}
                                            </button>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    {
                        count === 9 ? (
                            <button onClick={resetHandler} className="border-none outline-none cursor-pointer rounded bg-slate-700 text-2xl text-white mt-6 mb-12 p-6 pt-2 pb-2">Restart</button>
                        ):(
                            <button onClick={changeHandler} className="border-none outline-none cursor-pointer rounded bg-slate-700 text-2xl text-white mt-6 mb-12 p-6 pt-2 pb-2">Next</button>
                        )
                    }
                    
                </div>
            </div>
        )
        
        }

    </div>
  )
}

export default Science