import {
  Box,
  TextField,
  IconButton,
  List,
  ListItem,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOverlay({ open, onClose, products }) {
  const [searchkey, setSearchkey] = useState("");
  const navigate = useNavigate();

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchkey.toLowerCase())
  );
  const handleSelect = (product) => {
    navigate(`/product/${product.id}`);
    onClose();
    setSearchkey("");
  };

  return (
    <Fade in={open}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(1px)",
          zIndex: 2000,
          p: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <TextField
            autoFocus
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            value={searchkey}
            onChange={(e) => setSearchkey(e.target.value)}
            sx={{
              input: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#999" },
                "&:hover fieldset": { borderColor: "#fff" },
              },
            }}
          />

          <IconButton sx={{ color: "white", ml: 2 }} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {searchkey !== "" && (
          <List>
            {filtered.length === 0 ? (
              <ListItem sx={{ color: "#aaa", fontSize: "16px" }}>
                No results found
              </ListItem>
            ) : (
              filtered.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    cursor: "pointer",
                    px: 0,
                    "&:hover": { color: "#90caf9" },
                  }}
                  onClick={() => handleSelect(item)}
                >
                  {item.title}
                </ListItem>
              ))
            )}
          </List>
        )}
      </Box>
    </Fade>
  );
}
