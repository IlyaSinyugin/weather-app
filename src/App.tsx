import "./App.css";
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
// @tsx-ignore
// @ts-ignore
import WeatherCard from "./components/WeatherCard.tsx";

function App() {
  const [lat, setLat] = useState<any>([]);
  const [long, setLong] = useState<any>([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=" +
        process.env.REACT_APP_API_KEY +
        "&units=metric"
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <WeatherCard weatherData={data} />
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
