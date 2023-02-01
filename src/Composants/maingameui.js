import { useEffect , useState } from "react";
import x from "../assest/x.png";
import o from "../assest/o.png";

const Maingameui = function ({game}) {
    //on can declare function pour recupere la valeur de notre variables 
    const [mark , setMark ] = useState (game.mark) ;
    const [player , setPlayer ] = useState(game.player);
    const places = [0,1,2,3,4,5,6,7,8];
    
    //const for turn game  
    const [turn , setTurn] = useState("x");
    
    const [placeReserve , setPlaseReserve] = useState([]);
    const [valeus , setValeus] = useState([]);
    const [gameEnd , setGameEnd] = useState(false);
     
    // function fot move 

    const move =  (e) => {
                if(e.target.tagName === "DIV"){
                    if(!placeReserve.includes(e.target.dataset.place)){
                    //etap1 change div active from turn 
                    //to get placeReserve
                    const placesempty = [];
                    const valuesArray = [];

                    if(placeReserve.length>0){
                        placeReserve.forEach((e) => placesempty.push(e))
                    }
                    if(valeus.length > 0){
                        valeus.forEach((e) => valuesArray.push(e));
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
                        valuesArray.push(e.target.dataset.valeur);
                        setPlaseReserve(placesempty);
                        setValeus(valuesArray);
                    }
                    else{
                        image.setAttribute('src',o);
                        setTurn('x');
                        e.target.appendChild(image);
                        placesempty.push(e.target.dataset.place);
                        valuesArray.push(e.target.dataset.valeur);
                        setPlaseReserve(placesempty);
                        setValeus(valuesArray);
                    }
                 
                }
              
            }else{
                console.log("nathing");
            }
        }


    //console.log(turn);


    //function to check winner in this game   
    const checkWiner = () =>{
           if(valeus.length < 9  && placeReserve.length < 9 ){
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
           
              
             setGameEnd(true);
           }//here in case drawing
           else {
             //call function end Game with message draw 
             endGame("this is drawing");
             setGameEnd(true);
           }
    }


    console.log(valeus);
    console.log(placeReserve);

    //game-Over 
    const endGame = (message) => {
         console.log("this is "+message);
    }
    
    useEffect (() =>{
             checkWiner()
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
        </div>
    );
}

export default Maingameui;