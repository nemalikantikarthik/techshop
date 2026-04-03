import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../Redux/cartSlice";
import { RemoveShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const originalPrice = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );

  const discountedPrice = cartItems.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );

  const discount = originalPrice - discountedPrice;
  if (cartItems.length === 0) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#121212",
        }}
      >
        {/* <img
          src="/emptycart.png"
          style={{ width: 200, marginBottom: 20 }}
          alt="empty-cart"
        /> */}
        <RemoveShoppingCart sx={{ fontSize: 180, color: "red", mb: 2 }} />

        <Typography
          sx={{ fontSize: "28px", color: "#c8c8d3", fontWeight: "bold" }}
        >
          Your Cart is Empty
        </Typography>

        <Link to="/products">
          <Button
            sx={{
              mt: 3,
              backgroundColor: "#e60000",
              color: "white",
              padding: "10px 30px",
              "&:hover": { backgroundColor: "#cc0000" },
            }}
          >
            Start Shopping
          </Button>
        </Link>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        p: 3,
        color: "white",
        background: "#141414",
        height: "100vh",
        paddingTop: 10,
      }}
    >
      <Box sx={{ flex: 2 }}>
        {cartItems.map((item) => (
          <Card
            key={item.id}
            sx={{
              background: "#222",
              color: "white",
              display: "flex",
              mb: 3,
              mt: 3,
              p: 2,
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 130, objectFit: "contain" }}
              image={item.images[0]}
              alt={item.title}
            />

            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {item.title}
              </Typography>

              <Typography sx={{ fontSize: "20px", mb: 2 }}>
                ₹{item.finalPrice}
                <span
                  style={{
                    marginLeft: "10px",
                    textDecoration: "line-through",
                    color: "#777",
                  }}
                >
                  ₹{item.originalPrice}
                </span>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  background: "#222",
                  width: "130px",
                  p: "6px 12px",
                  borderRadius: "7px",
                }}
              >
                <IconButton
                  onClick={() => dispatch(decreaseQty(item.id))}
                  sx={{ color: "white" }}
                >
                  -
                </IconButton>

                <Typography sx={{ fontSize: "20px" }}>
                  {item.quantity}
                </Typography>

                <IconButton
                  onClick={() => dispatch(increaseQty(item.id))}
                  sx={{ color: "white" }}
                >
                  +
                </IconButton>
              </Box>
            </CardContent>

            <IconButton
              onClick={() => dispatch(removeFromCart(item.id))}
              sx={{ color: "white" }}
            >
              <DeleteIcon sx={{ fontSize: 26 }} />
            </IconButton>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          flex: 1,
          background: "#131313",
          p: 3,
          borderRadius: "12px",
          height: "fit-content",
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          Order Summary ({cartItems.length} items)
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Original Price</Typography>
          <Typography>₹{originalPrice}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
            color: "limegreen",
          }}
        >
          <Typography>Discount</Typography>
          <Typography>- ₹{discount}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography>Delivery</Typography>
          <Typography sx={{ color: "limegreen" }}>Free</Typography>
        </Box>

        <Divider sx={{ borderColor: "#333", my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Total Price</Typography>
          <Typography variant="h6">₹{discountedPrice}</Typography>
        </Box>

        <Button
          fullWidth
          sx={{
            mt: 3,
            background: "red",
            color: "white",
            py: 1.5,
            fontSize: "18px",
            textTransform: "none",
            "&:hover": { background: "#cc0000" },
            borderRadius: "8px",
          }}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};
