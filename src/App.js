import Rcom from "./Return"
import listdb from './data/list'


function App() { 

  return (
   <>     
      <Rcom title="공지사항" dbnm={listdb}></Rcom>  
   </>
  );
}

export default App;
