
import { useState } from 'react';
import './App.css'

function App() {

  const [selectedTab, setSelectedTab] = useState(0);
  // 상태변수 selectedTab 0 첫번째버튼을 활성화시키기 위해서 ...

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };
  // 상태변수의 값을 변경해서 재랜더링하는 함수

  return (
    <div id="app">
      <div className="title d-flex flex-column align-items-center">
        <strong className="d-block">빅테이터로 추천하는</strong>
        <h2>스테디셀러</h2>
      </div>
      <div className="tabbox d-flex justify-content-center">
        <ul className="d-flex">
          {["30대이하", "40대", "50대이상"].map((v, i) => (
            <li key={`tab${i}`} className={ selectedTab === i ? 'on px-3' : 'px-3'}>
              <button onClick={(e) => { 
                       console.log(e.target);  // 이벤트의 매개인자 이벤트객체 
                       handleTabClick(i) }  }>{v}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;