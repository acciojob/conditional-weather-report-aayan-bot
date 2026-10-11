
import React from "react";
import {useState} from 'react';
import './../styles/App.css';

const [weather,setweather]=useState({temperature: 25, condition: "sunny"});
const colour=weather.temperature > 20 ? "red" : "blue";



const App = () => {
  return (
    <div>
      <span>
      <p style={{ color: colour }}>{weather.temperature}°C</p>
      </span>
      <p>{weather.condition}</p>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
