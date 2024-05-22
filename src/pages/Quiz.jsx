import { NavLink } from "react-router-dom";
import quiz from "../API/quiz";

function Quiz() {
  return (
    <div className="bg-slate-900">

      <div className="h-screen">
      <h1 className="mt-12 text-white text-6xl flex justify-center items-center mb-5">Mid-B-Inz</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center gap-5 mt-7">
          {quiz.map((quiz) => {
            return (
              <div key={quiz.id} className="container relative w-6/12" >
                <NavLink to={quiz.path}>   
                    <img
                    src={quiz.src}
                    alt={quiz.title}
                    className="block h-96 w-96"
                    />
                    <div className="absolute top-0 left-0 w-96 h-96 opacity-0 transition-opacity duration-500 ease-in-out bg-slate-800 hover:opacity-100 flex justify-center items-center">
                    <div className="text-white text-6xl text-center">
                        {quiz.title}
                    </div>
                    </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Quiz;
