import './App.scss'
import leftBroPNG from "./assets/left_bro.png";
import rightBroPNG from "./assets/right_bro.png";
import TextType from "./components/TextType/TextType.tsx";

function App() {

  return (
    <div className="app">
      <img src={leftBroPNG} alt="" className="bro-png" id="left-bro" draggable="false" />
      <TextType
        className="text"
        text={["morojjjj x suupchiik", "we're cooking something."]}
        typingSpeed={75}
        pauseDuration={3000}
        showCursor={true}
        cursorCharacter="▌"
        variableSpeed={{min: 60, max: 120}}
      />
      <img src={rightBroPNG} alt="" className="bro-png" id="right-bro" draggable="false" />
    </div>
  )
}

export default App
