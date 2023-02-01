import { useEffect , useState } from "react";

const Maingameui = function ({game}) {
    //on can declare function pour recupere la valeur de notre variables 
    const [mark , setMark ] = useState (game.mark) ;
    const [player , setPlayer ] = useState(game.player);

    return (
        <div  className="maingameui">
          
        </div>
    );
}

export default Maingameui;