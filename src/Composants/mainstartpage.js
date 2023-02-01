import icon_x_o from "../assest/icon-x-o.png";
import { useEffect , useState } from "react";


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

        useEffect(() => {
            
        },[mark]);


    return (
            <div className="main-div">
                {/* marks text div */}
                <div className="marks-text">
                    <img src={icon_x_o}/>
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
                            <p>Y</p>
                       </div>
                    </div>
                </div>
                {/* div for le differents buttons */}
                <div className="buttons">
                     <button className="button-cpu" >New Game (vs CPU) </button>
                     <button className="button-player">New Game (vs Player) </button>
                </div>
             </div>
      
    );
}

export default Mainstartpage;