import icon_x_o from "../assest/icon-x-o.png";
import x from "../assest/x.png";
import o from "../assest/o.png";

import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";



const Mainstartpage = function () {

        // notre variable qui stocke mark choise par user
        const [mark , setMark] = useState("x");

        const changemark = (e) => {
            const marks = document.querySelectorAll('.mark-div');
            marks.forEach((ele) => {
                 ele.classList.remove('mark-active');
              });
              if(e.target.tagName === "DIV" ){
                 e.target.classList.add('mark-active');
                 setMark(e.target.dataset.doc);
              }
              else{
                e.target.parentElement.classList.add('mark-active');
                setMark(e.target.parentElement.dataset.doc);
              }
        }

        //console.log(mark)

        // end code change mark 
        //i need to use the history to redirecte vers page game 

        let history = useHistory();


        const login = (e) => {
            console.log(e.target.dataset.player);
            history.push({
                pathname: '/game',
                state: {  // location state
                  mark: mark,
                  player : e.target.dataset.player 
                },
              });    
        }

        useEffect(() => {
            
        },[mark]);


    return (
            <div className="main-div">
                {/* marks text div */}
                <div className="marks-text">
                    <img src={x}/>
                    <img src={o}/>
                </div>
                {/* choose div  */}
                <div className="choix-mark">
                    <div className="desc-choix">
                     <p>PICK PLAYER 1'ST MARK</p>
                    </div>
                    <div className="marks">
                       <div className="mark-div mark-active" data-doc="x" onClick={(e) => {
                             changemark(e);} 
                             } >
                            <p>X</p>
                       </div>
                       <div className="mark-div" data-doc="y" onClick={(e) => {
                             changemark(e);} 
                             } >
                            <p>O</p>
                       </div>
                    </div>
                </div>
                {/* div for le differents buttons */}
                <div className="buttons">
                     <button className="button-cpu"  data-player="cpu"
                         onClick={(e) => login(e)}>New Game (vs CPU) </button>
                     <button className="button-player" data-player="player"
                         onClick={(e)=> {login(e)}}>New Game (vs Player) </button>
                </div>
             </div>
      
    );
}

export default Mainstartpage;