import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let[error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e8ce4e75c7095ac06fafea7912e61176";
    
    let getWeatherInfo = async () => {
        try {
          let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        let result = {
          city : jsonResponse.name,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
      // console.log(jsonResponse);
        return result;
        } catch (err) {
          throw err;
        }
    };  

    let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    setError(false);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
      <h3>Search for Weather</h3>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          focused
        />
        <br />
        <br />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Search
        </Button>
        {error && <p style={{color : "red"}}>No Such City Exists!</p>}
      </form>
    </div>
  );
}
