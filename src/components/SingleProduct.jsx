import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { products } from "../utils/products";
import reviewsData from "../utils/reviewsData";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

export const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === Number(id));

  const [mainImage, setMainImage] = useState(product?.images?.[0] || "");
  const [activeTab, setActiveTab] = useState("specs");

  const handleAdd = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (!product) {
    return (
      <Typography sx={{ color: "white", textAlign: "center", pt: 14 }}>
        Product not found
      </Typography>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          p: 4,
          background: "#111",
          color: "#fff",
          minHeight: "100vh",
          paddingTop: 12,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          {product.images.map((img, index) => (
            <Card
              key={index}
              onClick={() => setMainImage(img)}
              sx={{
                width: 80,
                height: 80,
                border:
                  mainImage === img
                    ? "2px solid #7c3aed"
                    : "1px solid #333",
                borderRadius: "8px",
                cursor: "pointer",
                background: "#1a1a1a",
              }}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`${product.title}-${index + 1}`}
                sx={{ height: "100%", objectFit: "contain", p: 1 }}
              />
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            minWidth: 280,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={mainImage}
            alt={product.title}
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "450px",
              objectFit: "contain",
              marginTop: "20px",
            }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            minWidth: 280,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: "26px", fontWeight: 700 }}>
            {product.title}
          </Typography>

          <Typography sx={{ color: "#c4b5fd" }}>
            Brand: {product.brand}
          </Typography>

          <Typography sx={{ color: "#c4b5fd" }}>
            Category: {product.category}
          </Typography>

          <Typography sx={{ color: "#c4b5fd" }}>
            Type: {product.type}
          </Typography>

          <Typography sx={{ color: "#c4b5fd" }}>
            Connectivity: {product.connectivity}
          </Typography>

          <Typography sx={{ color: "#ddd" }}>{product.info}</Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {[...Array(product.rateCount)].map((_, i) => (
              <StarIcon key={i} sx={{ color: "#facc15" }} />
            ))}
            <Typography sx={{ color: "#aaa", fontSize: "14px" }}>
              ({product.ratings} ratings)
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#22c55e",
              }}
            >
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
            onClick={handleAdd}
            sx={{
              mt: 1,
              background: "#7c3aed",
              color: "white",
              py: 1.4,
              fontSize: "16px",
              fontWeight: "bold",
              width: "220px",
              "&:hover": {
                background: "#6d28d9",
              },
            }}
          >
            Add to Cart
          </Button>

          <Divider sx={{ borderColor: "#2a2a2a", my: 2 }} />

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              onClick={() => setActiveTab("specs")}
              sx={{
                color: activeTab === "specs" ? "#fff" : "#aaa",
                borderBottom:
                  activeTab === "specs"
                    ? "2px solid #7c3aed"
                    : "2px solid transparent",
                borderRadius: 0,
              }}
            >
              Specifications
            </Button>

            <Button
              onClick={() => setActiveTab("reviews")}
              sx={{
                color: activeTab === "reviews" ? "#fff" : "#aaa",
                borderBottom:
                  activeTab === "reviews"
                    ? "2px solid #7c3aed"
                    : "2px solid transparent",
                borderRadius: 0,
              }}
            >
              Reviews
            </Button>
          </Box>

          {activeTab === "specs" ? (
            <Box sx={{ mt: 1, color: "#ddd", lineHeight: 2 }}>
              <Typography>Brand: {product.brand}</Typography>
              <Typography>Category: {product.category}</Typography>
              <Typography>Type: {product.type}</Typography>
              <Typography>Connectivity: {product.connectivity}</Typography>
              <Typography>Rating: {product.rateCount} stars</Typography>
            </Box>
          ) : (
            <Box sx={{ mt: 1 }}>
              {reviewsData.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    mb: 2,
                    p: 2,
                    border: "1px solid #2a2a2a",
                    borderRadius: 2,
                    background: "#171717",
                  }}
                >
                  <Typography sx={{ fontWeight: 700 }}>
                    {item.name}
                  </Typography>

                  <Typography sx={{ color: "#999", fontSize: "13px", mb: 1 }}>
                    {item.date}
                  </Typography>

                  <Box sx={{ display: "flex", mb: 1 }}>
                    {[...Array(item.rateCount)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: "#facc15", fontSize: 18 }} />
                    ))}
                  </Box>

                  <Typography sx={{ color: "#ddd" }}>
                    {item.review}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};