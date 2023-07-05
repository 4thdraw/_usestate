
import { useState } from "react";
import './App.css'
function App() {

  const bgcolor = ['red','green','blue'] 
  const [colovar, setcolor] = useState(0)
  //setcolor(2)   ->  colovar =2 
  return (    
    <button className={bgcolor[colovar]}

            onClick={()=>{ 
              setcolor( (colovar + 1 ) % bgcolor.length ) //colovar ->1                              
              }}>
              {              
              document.body.classList =  bgcolor[colovar] 
              }              
    </button>  


  );
}

export default App;
