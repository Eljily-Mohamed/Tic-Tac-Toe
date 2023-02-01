import { useEffect , useState } from "react";
import x from "../assest/x.png";
import o from "../assest/o.png";

const Maingameui = function ({game}) {
    //on can declare function pour recupere la valeur de notre variables 
    const [mark , setMark ] = useState (game.mark) ;
    const [player , setPlayer ] = useState(game.player);
    const places = ['0', '1', '2', '3','4','5' ,'6','7','8'];
    
     
    // function fot move 

    const move =  (e) => {
         if(e.target.tagName === "DIV"){
            console.log(e.target);

         }
         else{
            console.log("nathing");
         }
    }

    //function to check winner in this game 



    return (
        <div  className="maingameui">
             <div className="view-game">
                {/* div for this turn game */}
                <div className="turn-div">
                   <div className="turn turn-active">
                       <p>X's Turn</p>
                   </div>
                   <div className="turn">
                       <p>O's Turn</p>
                   </div>
                </div>
                {/* Border jeux */}
                <div className="border-div" >
                    {/* differents place for play */}
                    {places.map(elem => ( 
                        <div className="place-div" data-place={elem} onClick={(e) => (move(e))}>
                           {/* <img src={o} /> */}
                        </div>
                    ))}
                </div>
             </div>
        </div>
    );
}

export default Maingameui;