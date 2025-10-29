import './App.scss'
import leftBroPNG from "./assets/left_bro.png";
import rightBroPNG from "./assets/right_bro.png";
import TextType from "./components/TextType/TextType.tsx";

function App() {

  return (
    <div className="app">
      <a href="https://t.me/morojjjj" className="bro-url">
        <img src={leftBroPNG} alt="" className="bro-png" id="left-bro" draggable="false"/>
      </a>
      <TextType
        className="text"
        text={["morojjjj x suupchiik", "we're cooking something."]}
        typingSpeed={75}
        pauseDuration={3000}
        showCursor={true}
        cursorCharacter="▌"
        variableSpeed={{min: 60, max: 120}}
      />
      <a href="https://t.me/suupchiik" className="bro-url">
        <img src={rightBroPNG} alt="" className="bro-png" id="right-bro" draggable="false"/>
      </a>
    </div>
  )
}

export default App
