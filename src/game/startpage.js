import Nvbar from "../Composants/navbar";
import Mainstartpage from "../Composants/mainstartpage"; 

const startpage = (props) => {
       return (
            <div className="startPage">
                <Nvbar/>
                <Mainstartpage/>
            </div>
       );
} 

export default startpage ;