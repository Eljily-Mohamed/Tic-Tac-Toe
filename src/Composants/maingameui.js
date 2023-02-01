import { useEffect , useState } from "react";

const Maingameui = function ({game}) {
    //on can declare function pour recupere la valeur de notre variables 
    const [mark , setMark ] = useState (game.mark) ;
    const [player , setPlayer ] = useState(game.player);
    const places = ['0', '1', '2', '3','4','5' ,'6','7'];
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
                <div className="Border" >
                    {/* differents place for play */}
                    {places.map((elem) => )})
                </div>
             </div>
        </div>
    );
}

export default Maingameui;