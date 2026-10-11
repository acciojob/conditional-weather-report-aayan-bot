
import React from "react";
import {useState} from 'react';
import './../styles/App.css';





const App = () => {

const [weather,setweather]=useState({temperature: 25, condition: "sunny"});
const colour=weather.temperature > 20 ? "red" : "blue";

  return (
    <div>
      
      <p style={{ color: colour }}><span>{weather.temperature}°C</span></p>
      
      <p>{weather.condition}</p>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
