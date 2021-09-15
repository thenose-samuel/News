import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import image from "../Resources/test.jpg";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function CardComponent() {
  return (
    <div>
      <Card
        sx={{
          width: 300,
          margin: "auto",
        }}
      >
        <CardMedia
          sx={{
            height: 200,
            width: "100%",
            objectFit: "cover",
          }}
          component="img"
          image={image}
          height="150"
        />
        <CardContent>
          <Typography variant="h5">Hello World</Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
