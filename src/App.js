import { useState } from "react";
import Rcom from "./Return"
import pdb from "./data/context"

function App() {
  const [viewCon, setViewCom] = useState(false); 
  return (
   <>
      <button onClick={ (e) => {
        setViewCom(!viewCon)
      }}>나타나라</button>
       <div>
       { viewCon  &&  <Rcom context={ pdb } />  }      
       <Rcom context={ pdb } />  
       <Rcom context={ pdb } />   
       </div>   
   </>
  );
}

export default App;
