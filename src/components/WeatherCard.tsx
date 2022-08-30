import React from "react";
import { Card, CardHeader, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ECC141",
    },
    secondary: { main: "#0F68A3" },
  },
});

function WeatherCard({ weatherData }) {
  return (
    <Card>
      {console.log(weatherData)}
      <Typography variant="h2" gutterBottom>
        {weatherData.name}
      </Typography>
      <Typography>Feels like: {weatherData.main.feels_like}C</Typography>
    </Card>
  );
}

export default WeatherCard;
