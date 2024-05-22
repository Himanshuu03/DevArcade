import mid from "../assets/mid-b-inz.png";
import retro from "../assets/retro-gear.png";
import snake from "../assets/snake.jpeg";
import tictactoe from "../assets/tictactoe.png";
import jumper from "../assets/jumper.png";
import recall from "../assets/recall.png";
import flappy from "../assets/flappy-bird.png";


const games = [
    {
        id: 3,
        title: "Mid-B-Iniz",
        description: "Challenge your intellect with a variety of mind-bending questions.",
        src:mid,
        path:"/game/mid-b-inz"
    },
    {
        id:8,
        title:"Retro Gear",
        description:"A classic game of dodging other cars and earning points.",
        src:retro,
        path:"/game/retro-gear"
    },
    {
        id: 5,
        title: "Snake(Blockade)",
        description:"A classic game of Snake, eat the food and grow your snake.",
        src:snake,
        path:"/game/snake"
    },
    {
        id: 2,
        title: "Tic Tac Toe",
        description: "Classic game of Xs and Os, test your strategic skills against a friend",
        src:tictactoe,
        path:"/game/tic-tac-toe"
    },
    {
        id:6,
        title:"Jumper",
        description:"A simple game of jumping over obstacles with a twist.",
        src:jumper,
        path:"/game/jumper"
    },
    {
        id: 4,
        title: "Recall Racer",
        description: "Test your memory with a fast-paced game of recall.",
        src:recall,
        path:"/game/recall-racer"
    },
    {
        id:7,
        title:"Flappy Bird",
        description:"Navigate through obstacles and see how far you can fly with this addictive bird game.",
        src:flappy,
        path:"/game/flappy-bird"
    },
    
];

export default games;
