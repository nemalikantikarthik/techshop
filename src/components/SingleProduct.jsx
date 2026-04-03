import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, Card, CardMedia } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { products } from "../utils/products";
import reviewsData from "../utils/reviewsData";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

export const SingleProduct = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState("specs");
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginTop: 2,
          }}
        >
          {product.images.map((img, index) => (
            <Card
              key={index}
              onClick={() => setMainImage(img)}
              sx={{
                width: 80,
                height: 80,
                border: mainImage === img ? "2px solid #fff" : "1px solid #333",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                image={img}
                sx={{ height: "100%", objectFit: "contain", p: 1 }}
              />
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={mainImage}
            alt={product.title}
            style={{
              width: "450px",
              height: "450px",
              objectFit: "contain",
              marginTop: "20px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: "26px", fontWeight: 700 }}>
            {product.title}
          </Typography>

          <Typography sx={{ fontSize: "18px", color: "#ccc" }}>
            {product.info}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {Array(product.rateCount)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} sx={{ color: "#ff1a1a" }} />
              ))}
            <Typography sx={{ color: "#bbb" }}>
              {product.ratings} Ratings
            </Typography>
          </Box>

          <Box sx={{ height: "1px", background: "#333", my: 1 }} />

          <Box>
            <Typography sx={{ fontSize: "26px", fontWeight: 700 }}>
              ₹{product.finalPrice.toLocaleString()}
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                textDecoration: "line-through",
                color: "#777",
              }}
            >
              ₹{product.originalPrice.toLocaleString()}
            </Typography>

            <Typography sx={{ fontSize: "18px", color: "lightgreen", mt: 1 }}>
              You save: ₹
              {(product.originalPrice - product.finalPrice).toLocaleString()} (
              {Math.round(
                ((product.originalPrice - product.finalPrice) /
                  product.originalPrice) *
                  100
              )}
              %)
            </Typography>

            <Typography sx={{ color: "#999" }}>
              (Inclusive of all taxes)
            </Typography>
          </Box>
          <Box
            sx={{
              background: "green",
              px: 2,
              py: 1,
              color: "#fff",
              borderRadius: "8px",
              fontWeight: 600,
              alignSelf: "flex-start",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            ✔ In Stock
          </Box>

          <Box sx={{ height: "1px", background: "#333", my: 1 }} />
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            Offers and Discounts
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              sx={{ borderColor: "#555", color: "#fff" }}
            >
              No Cost EMI on Credit Card
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "#555", color: "#fff" }}
            >
              Pay Later & Avail Cashback
            </Button>
          </Box>

          <Button
            sx={{
              background: "#ff1a1a",
              color: "#fff",
              fontSize: "18px",
              py: 1.5,
              mt: 1,
              "&:hover": { background: "#e60000" },
            }}
            onClick={handleAdd()}
          >
            Add to cart
          </Button>
        </Box>
      </Box>

      {/* specifications and reviwes  */}
      <Box
        sx={{
          width: "100%",
          px: 10,
          py: 12,
          background: "#111",
          color: "#fff",
        }}
      >
        <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
          {["specs", "overview", "reviews"].map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              sx={{
                background: activeTab === tab ? "#ff1a1a" : "transparent",
                color: activeTab === tab ? "#fff" : "#ccc",
                px: 4,
                py: 1,
                fontSize: "18px",
                borderRadius: "6px",
                textTransform: "none",
                "&:hover": {
                  background: activeTab === tab ? "#e60000" : "#222",
                },
              }}
            >
              {tab === "specs" && "Specifications"}
              {tab === "overview" && "Overview"}
              {tab === "reviews" && "Reviews"}
            </Button>
          ))}
        </Box>

        <Box sx={{ mt: 6 }}>
          {activeTab === "specs" && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "250px auto",
                rowGap: 3,
                color: "#ccc",
                fontSize: "18px",
              }}
            >
              <Typography>Brand</Typography>
              <Typography>{product.brand}</Typography>

              <Typography>Model</Typography>
              <Typography>{product.title}</Typography>

              <Typography>Info</Typography>
              <Typography>{product.info}</Typography>

              <Typography>Headphone Type</Typography>
              <Typography>{product.type}</Typography>

              <Typography>Connectivity</Typography>
              <Typography>{product.connectivity}</Typography>

              <Typography>Ratings</Typography>
              <Typography>{product.ratings}</Typography>
            </Box>
          )}

          {activeTab === "overview" && (
            <Typography sx={{ color: "#ccc", fontSize: "18px" }}>
              The <span style={{ color: "red" }}>{product.title} </span>
              provides you with fabulous sound quality. Sound Tuned to
              Perfection Comfortable to Wear Long Hours Playback Time Enjoy
              perfect flexibility and mobility with amazing musical quality.
              Experience exceptional sound performance and smart features
              combined for an unrivalled listening experience.
            </Typography>
          )}

          {activeTab === "reviews" && (
            <Typography sx={{ color: "#ccc", fontSize: "18px" }}>
              {reviewsData.map((review) => (
                <Box
                  key={review.id}
                  sx={{
                    background: "#3e3d3dff",
                    padding: 2,
                    margin: 2,
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                    {review.name}
                  </Typography>

                  <Typography sx={{ color: "#888", fontSize: "14px" }}>
                    {review.date}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 0.5, mt: 1 }}>
                    {Array(review.rateCount)
                      .fill()
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{ color: "#ff1a1a", fontSize: 20 }}
                        />
                      ))}
                  </Box>

                  <Typography sx={{ mt: 1, fontSize: "16px", color: "#ddd" }}>
                    {review.review}
                  </Typography>
                </Box>
              ))}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};
