import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
    const INIT_URL =
     "https://images.unsplash.com/photo-1447014421976-7fec21d26d86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D";

     const HOT_URL =
     "https://media.istockphoto.com/id/988274822/photo/young-mother-and-child-with-heatstroke.webp?a=1&b=1&s=612x612&w=0&k=20&c=lV2-InazovodD1cGXyR3grvNPCO0rHm7z1KQvr6rLcc=";

     const COLD_URL =
     "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

     const RAIN_URL=
     "https://media.istockphoto.com/id/105934727/photo/rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z-21JImEjaPh55Ek00YRctuv1VNPwKJnlSDfySyonYw=";


    return (
    <div className="InfoBox">
     <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
         <CardMedia
         sx={{ height: 140 }}
         image={
                info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL 
                : COLD_URL 
                }
         title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {info.city} {" "}
                {info.humidity > 80 ? (
                < ThunderstormIcon/>
                ) : info.temp > 15 ? (
                <SunnyIcon/> 
                ) :(
                    <AcUnitIcon/> 
                )}
        </Typography>
        <Typography variant="body2"  color= "text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>
            The weather can be described as <i>{info.weather} </i>and feels like {info.feelslike}&deg;C
         </p>

        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}