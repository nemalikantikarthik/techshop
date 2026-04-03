import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import SearchOverlay from "./SearchOverlay";
import LoginOverlay from "./LoginOverlay";
// import { Products } from "./Products";
import { products } from "../utils/products";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const cartCount = useSelector((state) => state.cart.items.length);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? "black" : "transparent",
          boxShadow: scrolled ? 2 : "none",
          transition: "0.4s",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
            }}
            color="textColor"
            fontSize="1.5rem"
            fontWeight="bold"
            onClick={() => (window.location.href = `/`)}
          >
            Tech-Shop
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Tooltip
              title="Search"
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "#222",
                    border: "1px solid #6c757d",
                    borderRadius: "3px",
                    padding: ".4rem .6rem",
                    fontSize: "12px",
                  },
                },
              }}
            >
              <Button
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
                color="textColor"
                onClick={() => setOpenSearch(true)}
              >
                <Search />
              </Button>
            </Tooltip>
            <Tooltip
              title="Cart"
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "#222",
                    border: "1px solid #6c757d",
                    borderRadius: "3px",
                    padding: ".4rem .6rem",
                    fontSize: "12px",
                  },
                },
              }}
            >
              <Link to="/cart">
                <Button
                  color="textColor"
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  <Badge
                    badgeContent={cartCount}
                    color="error"
                    overlap="circular"
                  >
                    <ShoppingCart />
                  </Badge>
                </Button>
              </Link>
            </Tooltip>
            <Tooltip
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "#222",
                    border: "1px solid #6c757d",
                    borderRadius: "3px",
                    padding: "20px 40px",
                    fontSize: "12px",
                  },
                },
              }}
              title={
                <Box
                  sx={{
                    width: 180,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    Hello!
                  </Typography>
                  <Typography sx={{ fontSize: "13px", opacity: 0.8 }}>
                    Access account and manage orders
                  </Typography>

                  <Button
                    variant="outlined"
                    size="small"
                    color=""
                    sx={{ textTransform: "none", mt: 1 }}
                    onClick={() => setOpenLogin(true)}
                  >
                    Login / Signup
                  </Button>
                  <Box
                    sx={{
                      width: "100%",
                      height: "3px",
                      color: "rbga(255,255,255,0.3",
                      my: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "13px",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Please login
                  </Typography>
                </Box>
              }
            >
              <Button
                color="textColor"
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
              >
                <AccountCircle />
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <SearchOverlay
        open={openSearch}
        onClose={() => setOpenSearch(false)}
        products={products}
      />
      <LoginOverlay open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
};
