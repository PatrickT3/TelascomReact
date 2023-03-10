// css
import './App.css';
// react
import {useState} from "react";
// componets
import TelasOne from './components/TelasOne';
import TelasTwo from './components/TelasTwo';
import TelasThree from './components/TelasThree';

function App() {

  const stages = [
   {id:1, stage: "start"},
   {id:2, stage: "two"},
   {id:3, stage: "three"} 
  ]

  const [stg,setStg] = useState(stages[0].stage);

  const inicio = () => {
    setStg(stages[1].stage);
  }
  const telTwo = () => {
    setStg(stages[2].stage)
  }
  const telThree = () => {
    setStg(stages[0].stage)
  }


  return (
    <div className="App">
      <div className='corp'>
        <div className='dentro'>
          <nav>
            <ul className='liNav'>
              <li 
                  className={stg === 'start'? 'selc' : 'padrao'} 
                  onClick={() => setStg(stages[0].stage)}>
              </li>
              <li 
                  className={stg === 'two'? 'selc' : 'padrao'} 
                  onClick={() => setStg(stages[1].stage)}>
              </li>
              <li 
                  className={stg === 'three'? 'selc' : 'padrao'} 
                  onClick={() => setStg(stages[2].stage)}>
              </li>
            </ul>
          </nav>
          {stg === "start" && <TelasOne inicio={inicio}/>}
          {stg === "two" && <TelasTwo telTwo={telTwo}/>}
          {stg === "three" && <TelasThree telThree={telThree}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
