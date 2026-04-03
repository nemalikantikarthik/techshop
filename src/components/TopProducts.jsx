import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductCard";
import BrowseAllCard from "./BrowseAllCard";
import { products } from "../utils/products";

const categories = ["All", "Headphones", "Earbuds", "Neckbands"];

const TopProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const topRated = filtered.filter((p) => p.rateCount >= 4);

  const finalProducts = topRated.slice(0, 11);

  return (
    <Box sx={{ py: 6, background: "#111", color: "#fff" }}>
      <Typography variant="h5" sx={{ mb: 3, ml: 2, fontWeight: 600 }}>
        <center>Top Products</center>
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "center",
          mb: 4,
        }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            sx={{
              textTransform: "none",
              fontSize: "18px",
              px: 3,
              py: 1,
              borderRadius: "6px",
              color: activeCategory === cat ? "#fff" : "#b0b0b0",
              background: activeCategory === cat ? "#ff1a1a" : "transparent",
              "&:hover": {
                background: activeCategory === cat ? "#e60000" : "transparent",
              },
            }}
          >
            {cat}
          </Button>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          overflowX: "auto",
          px: 2,
          alignItems: "center",
          marginLeft: "28px",
        }}
      >
        {finalProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}

        <BrowseAllCard />
      </Box>
    </Box>
  );
};

export default TopProducts;
