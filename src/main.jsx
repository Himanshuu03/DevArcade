import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
import Landing from './pages/Landing'
import RootLayout from './layout/root-layout.jsx';
import SignInPage from './pages/SignInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx'
import DashboardLayout from './layout/game-layout.jsx';
import TicTacToe from './pages/TikTacToe.jsx';
import Quiz from './pages/Quiz.jsx';
import History from './pages/History.jsx';
import Geo from './pages/Geo.jsx';
import Science from './pages/Science.jsx';
import RecallRacer from './pages/RecallRacer.jsx';
import Snake from './pages/Snake.jsx';
import Jumper from './pages/Jumper/Jumper.jsx';
import FlappyBird from './pages/FlappyBird.jsx';
import RetroGear from './pages/RetroGear/RetroGear.jsx';
SignUpPage

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element:<Landing/> },
      { path: "/dev-arcade/contact-us", element: <Contact/> },
      { path: "/dev-arcade/about-us", element: < About/> },
      { path: "/sign-in/*", element: < SignInPage/> },
      { path: "/sign-up/*", element: < SignUpPage/> },
      {
        element : <DashboardLayout/>,
        children :[
          { path :"/game/tic-tac-toe", element:<TicTacToe/>},
          { path:'/game/mid-b-inz' ,element:<Quiz/>},
          { path:'/game/quiz/history' ,element:<History/>},
          { path:'/game/quiz/geography' ,element:<Geo/>},
          { path:'/game/quiz/science' ,element:<Science/>},
          { path:'/game/recall-racer' ,element:<RecallRacer/>},
          { path:'/game/snake' ,element: <Snake/>},
          { path:'/game/jumper' ,element: <Jumper/>},
          { path:'/game/flappy-bird', element:<FlappyBird/>},
          { path:'/game/retro-gear',element:<RetroGear/>},
          { path:'*', element:<Landing/>}
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer/>
  </>
)
