import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footMenu = [
  {
    id: 1,
    title: "Help",
    menu: [
      { id: 1, link: "FAQs", path: "/" },
      { id: 2, link: "Track Order", path: "/" },
      { id: 3, link: "Cancel Order", path: "/" },
      { id: 4, link: "Return Order", path: "/" },
      { id: 5, link: "Warranty Info", path: "/" },
    ],
  },
  {
    id: 2,
    title: "Policies",
    menu: [
      { id: 1, link: "Return Policy", path: "/" },
      { id: 2, link: "Security", path: "/" },
      { id: 3, link: "Sitemap", path: "/" },
      { id: 4, link: "Privacy Policy", path: "/" },
      { id: 5, link: "Terms & Conditions", path: "/" },
    ],
  },
  {
    id: 3,
    title: "Company",
    menu: [
      { id: 1, link: "About Us", path: "/" },
      { id: 2, link: "Contact Us", path: "/" },
      { id: 3, link: "Service Centres", path: "/" },
      { id: 4, link: "Careers", path: "/" },
      { id: 5, link: "Affiliates", path: "/" },
    ],
  },
];

const footSocial = [
  { id: 1, icon: <FacebookIcon />, path: "/" },
  { id: 2, icon: <TwitterIcon />, path: "/" },
  { id: 3, icon: <InstagramIcon />, path: "/" },
  { id: 4, icon: <LinkedInIcon />, path: "/" },
];

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#0a0a0a", color: "#9ca3af", pt: 8, pb: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} marginLeft={16}>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              sx={{ color: "#fff", fontWeight: 700, mb: 2 }}
            >
              Tech-Shop
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
              Subscribe to our Email alerts to receive early discount offers,
              and new products info.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                placeholder="Email Address*"
                variant="outlined"
                size="small"
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    color: "#9ca3af",
                    bgcolor: "transparent",
                    "& fieldset": {
                      borderColor: "#374151",
                    },
                  },
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#ef4444",
                color: "#fff",
                px: 4,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  bgcolor: "#dc2626",
                },
              }}
            >
              Subscribe
            </Button>
          </Grid>

          {footMenu.map((section) => (
            <Grid item xs={12} sm={4} md={3} key={section.id}>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 600, mb: 2 }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {section.menu.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    sx={{
                      color: "#9ca3af",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  >
                    {item.link}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid #1f2937",
            mt: 6,
            pt: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#6b7280" }}>
            KARTHIK | 2025 | All Rights Reserved ©.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {footSocial.map((social) => (
              <IconButton
                key={social.id}
                href={social.path}
                sx={{
                  color: "#9ca3af",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
