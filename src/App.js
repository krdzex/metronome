import React, { useEffect, useRef, useState } from 'react';
import "./App.css";
import sound1 from "../src/sound.wav";

const App = () => {

  const sound = new Audio(sound1);
  const [sliderValue, setSliderValue] = useState(120);
  const timer = useRef()
  const [isPlaying, setIsPlaying] = useState(false);
  const onChangeHandler = (e) => {
    setSliderValue(e.target.value)
  }
  const playClick = () => {
    sound.play();
  }

  const start = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    if (isPlaying) {
      clearInterval(timer.current)
      timer.current = setInterval(playClick, (60 / sliderValue) * 1000)
    } else {
      clearInterval(timer.current)
    }
  }, [sliderValue, isPlaying, playClick])


  return (
    <div className="app-wrapper">
      <p style={{ textAlign: "center" }}>BMP: {sliderValue}</p>
      <input type="range" min="40" max="200" onChange={onChangeHandler} value={sliderValue} className="slider"></input>
      <div className="button">
        <button onClick={start} style={isPlaying ? { background: "linear-gradient(to right, #ed213a, #93291e)" } : { background: "linear-gradient(to right, #11998e, #38ef7d)" }}>{isPlaying ? "Stop" : "Start"}</button>
      </div>

    </div >
  );
};

export default App;
