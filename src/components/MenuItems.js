import React from "react";
import Header from "./Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./styles/menuItems.css";
import FoodItems from "../mock/foodItems.json";

const MenuItems = () => {
  return (
    <div className="Menu-continer">
      <Header />
      <div className="Menu-container-list">
        {FoodItems.map((foodItem, index) => (
          <>
            <div className="menu-items" key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={foodItem.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {foodItem.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Price : {foodItem.price}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      rating : {foodItem.rating}
                    </Typography>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={foodItem.rating}
                        precision={foodItem.rating}
                        readOnly
                        size="large"
                      />
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      deliveryTime:{foodItem.deliveryTime}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {foodItem.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </>
        ))}
      </div>

      <h1>MenuItems</h1>
    </div>
  );
};

export default MenuItems;
