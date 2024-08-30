import React, { useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("delhi");

  async function getWeatherData(){
    
    try {
      const data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&cnt=56`)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <button onClick={getWeatherData}>Fetch Data</button>
    </div>
  )
}

export default App
