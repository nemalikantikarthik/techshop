import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Button, Typography } from "@mui/material";
import buds from "../assets/buds.png";
import earphones from "../assets/earphones.png";
import headset from "../assets/headset.png";

export const MainScrolling = () => {
  const products = [
    {
      id: 1,
      name: "boAt Airdopes 131",
      heading: "Featherweight For Comfort All-Day.",
      price: "₹1,099",
      oldPrice: "₹2,990",
      image: buds,
    },
    {
      id: 2,
      name: "Sony WH-XB910N",
      heading: "Give your favourite music a boost.",
      price: "₹899",
      oldPrice: "₹2,499",
      image: earphones,
    },
    {
      id: 3,
      name: "JBL Live 660NC",
      heading: "Unmatched Sound. Unmatched Style.",
      price: "₹1,499",
      oldPrice: "₹3,999",
      image: headset,
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        background: "#141414",
        pt: "80px",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "2%",
          transform: "translateY(-50%)",
          fontSize: "200px",
          fontWeight: 700,
          opacity: 0.1,
          color: "white",
          lineHeight: "180px",
        }}
      >
        Over Ear
      </Typography>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 10,
                height: "80vh",
                color: "white",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#b5b5b5",
                    mb: 2,
                  }}
                >
                  {p.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "56px",
                    fontWeight: "700",
                    lineHeight: "65px",
                    mb: 3,
                    color: "#d4d8f5",
                  }}
                >
                  {p.heading}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
                    {p.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      ml: 2,
                      color: "#9e9e9e",
                      textDecoration: "line-through",
                    }}
                  >
                    {p.oldPrice}
                  </Typography>
                </Box>

                <Button
                  onClick={() => (window.location.href = `/product/${p.id}`)}
                  sx={{
                    background: "red",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    borderRadius: "8px",
                    fontWeight: "600",
                    textTransform: "none",
                    fontSize: "18px",
                    "&:hover": { background: "#cc0000" },
                  }}
                >
                  Show Product
                </Button>
              </Box>

              <Box
                sx={{ width: "45%", display: "flex", justifyContent: "center" }}
              >
                <img
                  src={p.image}
                  alt=""
                  style={{
                    width: "380px",
                    objectFit: "contain",
                    filter: "drop-shadow(0px 0px 20px rgba(0,0,0,0.4))",
                  }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
