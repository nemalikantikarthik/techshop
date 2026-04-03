import { Box, Typography } from "@mui/material";
import { products } from "../utils/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const FeatureProducts = () => {
  return (
    <Box sx={{ py: 6, background: "#111", color: "#ddd" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 4, fontWeight: 700 }}
      >
        Featured Products
      </Typography>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        style={{ paddingBottom: "40px" }}
        navigation={true}
        loop={true}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              sx={{ textAlign: "center", px: 2, cursor: "pointer" }}
              onClick={() => (window.location.href = `/product/${item.id}`)}
            >
              <Typography sx={{ mt: 2, fontSize: "1.1rem" }}>
                {item.title}
              </Typography>
              <img
                src={item.images[0]}
                alt={item.name}
                width="260"
                style={{ margin: "0 auto" }}
              />

              <Box sx={{ mt: 1 }}>
                <Typography
                  component="span"
                  sx={{ fontSize: "1.4rem", fontWeight: 700, mr: 1 }}
                >
                  ₹{item.finalPrice}
                </Typography>

                <Typography
                  component="span"
                  sx={{
                    textDecoration: "line-through",
                    color: "#777",
                    fontSize: "1rem",
                  }}
                >
                  ₹{item.oldPrice}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
