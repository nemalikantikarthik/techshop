import { Box, Grid, Typography } from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const servicesData = [
  {
    id: 1,
    icon: <LocalShippingIcon sx={{ fontSize: 48, color: "red" }} />,
    title: "Express Delivery",
    info: "Ships in 24 Hours",
  },
  {
    id: 2,
    icon: <SecurityIcon sx={{ fontSize: 48, color: "red" }} />,
    title: "Brand Warranty",
    info: "100% Original products",
  },
  {
    id: 3,
    icon: <LocalOfferIcon sx={{ fontSize: 48, color: "red" }} />,
    title: "Exciting Deals",
    info: "On all prepaid orders",
  },
  {
    id: 4,
    icon: <CreditCardIcon sx={{ fontSize: 48, color: "red" }} />,
    title: "Secure Payments",
    info: "SSL / Secure certificate",
  },
];

export const Advantages = () => {
  return (
    <Box
      sx={{
        background: "#101010",
        color: "#d7d7d7",
        py: 10,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: 8, fontWeight: 600 }}>
        Our Advantages
      </Typography>

      <Grid
        container
        spacing={12}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {servicesData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Box sx={{ textAlign: "center" }}>
              {item.icon}

              <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
                {item.title}
              </Typography>

              <Typography sx={{ fontSize: 16, opacity: 0.8 }}>
                {item.info}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
