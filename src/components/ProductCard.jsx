import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <Card
      sx={{
        width: 280,
        background: "#111",
        color: "#fff",
        border: "1px solid #333",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <CardMedia
        component="img"
        image={product.images[0]}
        sx={{
          height: 220,
          objectFit: "contain",
          p: 2,
          background: "#0d0d0d",
        }}
      />

      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          {Array(product.rateCount)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} sx={{ color: "#ff1a1a", fontSize: 20 }} />
            ))}
        </Box>

        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          {product.title}
        </Typography>

        <Typography sx={{ color: "#b5b5b5", fontSize: "14px", mb: 2 }}>
          {product.brand}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Typography sx={{ fontSize: "22px", fontWeight: 700 }}>
            ₹{product.finalPrice}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#888",
              textDecoration: "line-through",
            }}
          >
            ₹{product.originalPrice}
          </Typography>
        </Box>

        <Button
          fullWidth
          onClick={(e) => {
            e.stopPropagation();
            handleAdd();
          }}
          sx={{
            background: added ? "green" : "#ff1a1a",
            color: "#fff",
            textTransform: "none",
            py: 1,
            fontSize: "16px",
            transition: "0.3s ease",
            "&:hover": {
              background: added ? "green" : "#e60000",
            },
          }}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;