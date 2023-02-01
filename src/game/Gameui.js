import { useLocation } from "react-router-dom";
import Maingameui from "../Composants/maingameui";


const Gameui = function Gameui() {
    let location = useLocation();
    const mark = location.state.mark ;
    const player = location.state.player ;

    return (
         <div className="gameui">
            <Maingameui game = {{mark : mark , player : player}}/>
         </div>
    );
}

export default Gameui; 