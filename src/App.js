import React from "react"

function App() {
  const [ display, setDisplay] = React.useState(" ")

  const audioFiles = [
    {"key": "Q", "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "text": "Heater 1"},
    {"key": "W", "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", "text": "Heater 2"},
    {"key": "E", "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", "text": "Heater 3"},
    {"key": "A", "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", "text": "Heater 4"},
    {"key": "S", "audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", "text": "Clap"},
    {"key": "D", "audio": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "text": "Open-HH"},
    {"key": "Z", "audio": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", "text": "Kick-n'-Hat"},
    {"key": "X", "audio": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", "text": "Kick"},
    {"key": "C", "audio": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", "text": "Closed-HH"},]

  const drumKeys = audioFiles.map((audio) => 
    <div id={audio.text} className="drum-pad" onClick={() => playSound(audio.key, audio.text)} key={audio.key}>
      <audio className="clip" id={audio.key} src={audio.audio} />
      {audio.key}
    </div>
  )

  React.useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  },[])

  function playSound(id,text) {
    const audioElem = document.getElementById(id);
    audioElem.play();
    setDisplay(text);
  }

  function handleKeyPress(e) {
    const keysToCheck = audioFiles.map((audio) => audio.key);
    const audioElem = document.getElementById(e.key.toUpperCase());
    console.log(audioFiles[keysToCheck.indexOf(e.key.toUpperCase())])
    if (keysToCheck.includes(e.key.toUpperCase())) {
      audioElem.play();
      const displayText = audioFiles[keysToCheck.indexOf(e.key.toUpperCase())].text;
      setDisplay(displayText)
    }
  }

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="grid">{drumKeys}</div>
    </div>
  );
}

export default App;
