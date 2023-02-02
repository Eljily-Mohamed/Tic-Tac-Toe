import { useEffect , useState } from "react";
import x from "../assest/x.png";
import o from "../assest/o.png";

const Maingameui = function ({game}) {
    //on can declare function pour recupere la valeur de notre variables 
    const [mark , setMark ] = useState (game.mark) ;
    const [player , setPlayer ] = useState(game.player);
    const places = ['0','1','2','3','4','5','6','7','8'];
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
     ];

    const arraypos = ['','','','','','','','',''];
    
    //const for turn game  
    const [turn , setTurn] = useState("x");
    
    const [placeReserve , setPlaseReserve] = useState([]);
    const [valeus , setValeus] = useState(arraypos);
    const [gameEnd , setGameEnd] = useState(false);
    const [win , setWin] = useState("");

    
    // function fot move 
    const elementes = document.querySelectorAll('.place-div');
    const hide = document.querySelector('.buttons-restart');
    const hideSpan = document.querySelector('.span-win');

    const move =  (e) => {
                if(e.target.tagName === "DIV"){
                    if(!placeReserve.includes(e.target.dataset.place)){
                    //etap1 change div active from turn 
                    //to get placeReserve
                    const placesempty = [];
                    const valuesLocal = [];
                    arraypos[e.target.dataset.place] = e.target.dataset.valeur;
                    if(valeus.length > 0){
                        valeus.forEach((e) => {
                            valuesLocal.push(e)
                        })
                    }
                    valuesLocal[e.target.dataset.place] = e.target.dataset.valeur;
                    setValeus(valuesLocal);
                    if(placeReserve.length>0){
                        placeReserve.forEach((e) => placesempty.push(e))
                    }

                    const turn = document.querySelectorAll('.turn');
                    const image = document.createElement('img');
                    console.log(e.target.dataset.valeur);
                    turn.forEach((ele) => {
                        ele.classList.remove('turn-active');
                        if(ele.dataset.div != e.target.dataset.valeur){
                            ele.classList.add('turn-active');
                        }
                    });                     

                    //etap2 change valeur to turn  et place icon
                    
                    if(e.target.dataset.valeur === 'x'){
                        image.setAttribute('src',x);
                        setTurn('o');
                        e.target.appendChild(image);
                        placesempty.push(e.target.dataset.place);
                        setPlaseReserve(placesempty);
                    }
                    else{
                        image.setAttribute('src',o);
                        setTurn('x');
                        e.target.appendChild(image);
                        placesempty.push(e.target.dataset.place);
                        setPlaseReserve(placesempty);
                    }
                 
                }
              
            }else{
                console.log("nathing");
            }
            checkWiner()
        }
         


    //console.log(turn);


    //function to check winner in this game   
    const checkWiner = () =>{
              let elemntsColors = [];  
              for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                const a = valeus[winCondition[0]];
                const b = valeus[winCondition[1]];
                const c = valeus[winCondition[2]];

                // console.log(placeReserve[winCondition[0]]);
                // console.log(placeReserve[winCondition[1]]);
                // console.log(placeReserve[winCondition[2]]);


                if (a === "" || b === "" || c === "") {
                  continue;
                }
                if (a === b && b === c) {
                    elemntsColors.push(placeReserve[winCondition[0]])  
                    elemntsColors.push (placeReserve[winCondition[1]])
                    elemntsColors.push(placeReserve[winCondition[2]])
                    endGame(`${a} Win's`);
                    setWin(a);
                    setGameEnd(true);
                    return;
                }
              }
            
              if (!valeus.includes("")) endGame("Drow game");
        
    }

    //game-Over 
    const endGame = (message) => {
         console.log("this is "+message);
         setPlaseReserve(places);
         hide.style.display = "flex";
         colorCase();
    }
    //colors case 
    
    const colorCase =  () => {
         if(win === 'o') hideSpan.style.color = "#3ec5f4"
         if(win === 'x') hideSpan.style.color = "#ff615f"
    }

    //colors div 

    const colorsDiv = (elementsColors) => {
         console.log(elementsColors)
    }

    const restartGame = () =>{
        window.location='/';
    }
    
    useEffect (() =>{
             checkWiner();
    },)

    return (
        <div  className="maingameui">
             <div className="view-game">
                {/* div for this turn game */}
                <div className="turn-div">
                   <div className="turn turn-active" data-div="x">
                       <p>X's Turn</p>
                   </div>
                   <div className="turn" data-div="o">
                       <p>O's Turn</p>
                   </div>
                </div>
                {/* Border jeux */}
                <div className="border-div" >
                    {/* differents place for play */}
                    {places.map(elem => ( 
                        <div className="place-div" data-place={elem} data-valeur = {turn} onClick={(e) => (move(e)) }>
                           {/* <img src="x" />  */}
                        </div>
                    ))}
                </div>
             </div>
             <div className="buttons-restart">
                 <button onClick={restartGame}>Restart</button>
                 <p>Good Game <span className="span-win">{win.toUpperCase()}</span> Wins</p>
             </div>
        </div>
    );
}

export default Maingameui;