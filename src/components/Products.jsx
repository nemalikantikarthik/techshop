import React, { useState } from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/products";

export const Products = () => {
  const [sortOption, setSortOption] = useState("");
  const [category, setCategory] = useState("");

  const categories = [];
  products.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  let displayedProducts = [...products];

  if (sortOption === "low")
    displayedProducts.sort((a, b) => a.finalPrice - b.finalPrice);

  if (sortOption === "high")
    displayedProducts.sort((a, b) => b.finalPrice - a.finalPrice);

  if (sortOption === "top")
    displayedProducts.sort((a, b) => b.rateCount - a.rateCount);

  if (category !== "")
    displayedProducts = displayedProducts.filter(
      (item) => item.category === category
    );

  return (
    <Box
      sx={{
        display: "flex",
        background: "#0d0d0d",
        color: "#fff",
        minHeight: "100vh",
        pt: 10,
      }}
    >
      <Box
        sx={{
          width: 250,
          p: 4,
          borderRight: "2px solid #333",
          height: "100%",
        }}
      >
        <Typography sx={{ fontSize: 20, fontWeight: 800, mb: 1 }}>
          Sort By
        </Typography>

        <Typography
          sx={{ mb: 1, cursor: "pointer" }}
          onClick={() => setSortOption("")}
        >
          Latest
        </Typography>

        <Typography
          sx={{ mb: 1, cursor: "pointer" }}
          onClick={() => setSortOption("top")}
        >
          Top Rated
        </Typography>

        <Typography
          sx={{ mb: 1, cursor: "pointer" }}
          onClick={() => setSortOption("low")}
        >
          Price (Lowest First)
        </Typography>

        <Typography
          sx={{ mb: 3, cursor: "pointer" }}
          onClick={() => setSortOption("high")}
        >
          Price (Highest First)
        </Typography>

        <Typography sx={{ fontSize: 20, fontWeight: 800, mb: 1 }}>
          Filter By
        </Typography>

        <Typography sx={{ fontSize: 16, fontWeight: 600 }}>Category</Typography>

        {categories.map((cat, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            sx={{ mb: 1, cursor: "pointer" }}
            onClick={() => setCategory(cat)}
          >
            <Checkbox checked={category === cat} sx={{ color: "#fff" }} />
            <Typography>{cat}</Typography>
          </Box>
        ))}

        <Box
          display="flex"
          alignItems="center"
          sx={{ mt: 1, cursor: "pointer" }}
          onClick={() => setCategory("")}
        >
          <Checkbox checked={category === ""} sx={{ color: "#fff" }} />
          <Typography>All</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          display: "grid",
          gap: 3,
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        }}
      >
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};
