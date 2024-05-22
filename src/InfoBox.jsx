import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) {
    const img_url = "https://policenama.com/english/wp-content/uploads/sites/3/2022/02/temperature.jpg";

  return (
    <div>
      <h3>WeatherInfo - {info.weather}</h3>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image = {img_url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              City Name - {info.city}{
                info.humidity > 80
                ? <ThunderstormIcon/>
                :info.temp > 15 
                ? <WbSunnyIcon/>
                :<AcUnitIcon/>
              }
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like <i>{info.feelsLike} </i>&deg;C</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
