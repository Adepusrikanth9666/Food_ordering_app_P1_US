import * as React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import "./styles/cart.css";
import { selectCartItem } from "../redux/selectors/cartSlice";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector(selectCartItem);
  const theme = useTheme();
  console.log(cartItems, "cartItems-in cart page");
  return (
    <>
      <Header />
      <div className="cart-container">
        {cartItems &&
          cartItems.map((cartItem) => (
            <div className="cartItems">
              <Card sx={{ display: "flex" }} key={cartItem.id}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  height={120}
                  width={50}
                  image={cartItem?.image}
                  alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {cartItem?.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ color: "text.secondary" }}
                    >
                      {cartItem?.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="strong"
                      sx={{ color: "text.primary" }}
                    >
                      {cartItem?.cuisine}
                    </Typography>
                    <div className="price_quantity">
                      <Typography
                        variant="h6"
                        component="strong"
                        sx={{ color: "red" }}
                        marginRight={6}
                      >
                        Price : {cartItem?.price}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: "red" }}
                      >
                        Quantity : {cartItem?.quantity}
                      </Typography>
                    </div>
                    <Typography
                      variant="h6"
                      component="strong"
                      sx={{ color: "text.primary" }}
                    >
                      ⭐ {cartItem?.rating}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
}

export default Cart;
