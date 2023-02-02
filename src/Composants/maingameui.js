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
            // here logique of this function in case player win or lose game
            //console.log("pas Ancore termine");le cas x win 
            /*1-[0][x][1][x][2][x] = 
              2-[0][x][3][x][6][x]
              3-[3][x][5][x][8][x]
              4-[6][x][7][x][8][x]
              5-[3][x][4][x][5][x]
              6-[2][x][4][x][7][x]
              //diagonales
              7-[0][x][4][x][8][x]
              8-[3][x][5][x][4][x]

              meme choose pour y 
            */
            //   if(valeus[0].startsWith('x') && valeus[1].startsWith('x') && valeus[2].startsWith('x') ){
            //                 endGame(`${valeus[0]} Win`);
            //                 setGameEnd(true);
            //   }
            //   if(valeus[0].startsWith('x') && valeus[3].startsWith('x') && valeus[6].startsWith('x')){
            //                 endGame(`${valeus[0]} Win`);
            //                 setGameEnd(true);
            //   }
            //   if(valeus[2].startsWith('x') && valeus[5].startsWith('x') && valeus[8].startsWith('x')){
            //                 endGame(`${valeus[2]} Win`);
            //                 setGameEnd(true);
            //   }
            //   if(valeus[6].startsWith('x') && valeus[7].startsWith('x') && valeus[8].startsWith('x')){
            //                 endGame(`${valeus[6]} Win`);
            //                 setGameEnd(true);               
            //   }
            //   if(valeus[3].startsWith('x') && valeus[4].startsWith('x') && valeus[5].startsWith('x')){
            //                 endGame(`${valeus[3]} Win`);
            //                 setGameEnd(true);
            //   }
            //   if(valeus[1].startsWith('x') && valeus[4].startsWith('x') && valeus[7].startsWith('x')){
            //                 endGame(`${valeus[1]} Win`);
            //                 setGameEnd(true);
            //   }
            //   if(valeus[0].startsWith('x') && valeus[4].startsWith('x') && valeus[8].startsWith('x')){
            //                 endGame(`${valeus[0]} Win`);
            //                 setGameEnd(true);
            //   }
            //   if(valeus[2].startsWith('x') && valeus[3].startsWith('x') && valeus[6].startsWith('x')){
            //                 endGame(`${valeus[2]} Win`);
            //                 setGameEnd(true);
            //   }
            //   if(!valeus.includes('')){
            //                 endGame("drow game");
            //   }

              for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                const a = valeus[winCondition[0]];
                const b = valeus[winCondition[1]];
                const c = valeus[winCondition[2]];
                if (a === "" || b === "" || c === "") {
                  continue;
                }
                if (a === b && b === c) {
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
    }
    //colors case 

    const colorCase =  () => {
        
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
                 <p>Good Game <span>{win.toUpperCase()}</span> Wins</p>
             </div>
        </div>
    );
}

export default Maingameui;