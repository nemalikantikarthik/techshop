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
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchOverlay from "./SearchOverlay";
import LoginOverlay from "./LoginOverlay";
import { products } from "../utils/products";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const cartCount = useSelector((state) => state.cart.items.length);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? "rgba(15,15,23,0.95)" : "transparent",
          boxShadow: scrolled ? 4 : "none",
          transition: "0.4s",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ cursor: "pointer" }}
            color="textColor.main"
            fontSize="1.5rem"
            fontWeight="bold"
            onClick={() => navigate("/")}
          >
            Tech-Shop
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Tooltip title="Search">
              <Button
                sx={{
                  color: "#f5f3ff",
                  "&:hover": { backgroundColor: "transparent" },
                }}
                onClick={() => setOpenSearch(true)}
              >
                <Search />
              </Button>
            </Tooltip>

            <Tooltip title="Cart">
              <Link to="/cart">
                <Button
                  sx={{
                    color: "#f5f3ff",
                    "&:hover": { backgroundColor: "transparent" },
                  }}
                >
                  <Badge
                    badgeContent={cartCount}
                    color="secondary"
                    overlap="circular"
                  >
                    <ShoppingCart />
                  </Badge>
                </Button>
              </Link>
            </Tooltip>

            <Tooltip title="Login / Signup">
              <Button
                sx={{
                  color: "#f5f3ff",
                  "&:hover": { backgroundColor: "transparent" },
                }}
                onClick={() => setOpenLogin(true)}
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

      <LoginOverlay
        open={openLogin}
        onClose={() => setOpenLogin(false)}
      />
    </>
  );
};