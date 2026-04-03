import {
  Box,
  TextField,
  IconButton,
  Button,
  Typography,
  Divider,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function LoginOverlay({ open, onClose }) {
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
          backdropFilter: "blur(2px)",
          zIndex: 3000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            width: 420,
            bgcolor: "#1c1c1c",
            p: 4,
            borderRadius: "6px",
            position: "relative",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "#ccc",
              "&:hover": { color: "#fff" },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant="h5"
            sx={{ color: "white", fontWeight: "bold", mb: 1 }}
          >
            Login
          </Typography>

          <Typography sx={{ color: "#aaa", mb: 3 }}>
            New to Tech-Shop ?{" "}
            <span style={{ color: "#fff", cursor: "pointer" }}>
              Create an account
            </span>
          </Typography>

          <TextField
            fullWidth
            placeholder="Email"
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                "& fieldset": { borderColor: "#666" },
                "&:hover fieldset": { borderColor: "#aaa" },
              },
              input: { color: "#fff" },
            }}
          />

          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            variant="outlined"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                "& fieldset": { borderColor: "#666" },
                "&:hover fieldset": { borderColor: "#aaa" },
              },
              input: { color: "#fff" },
            }}
          />

          <Button
            fullWidth
            sx={{
              background: "red",
              color: "white",
              py: 1.2,
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": { background: "#d40000" },
            }}
          >
            Login
          </Button>

          <Box sx={{ display: "flex", alignItems: "center", mt: 3, mb: 3 }}>
            <Divider sx={{ flex: 1, borderColor: "#444" }} />
            <Typography sx={{ color: "#bbb", mx: 2 }}>or login with</Typography>
            <Divider sx={{ flex: 1, borderColor: "#444" }} />
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              fullWidth
              sx={{
                bgcolor: "#3b5998",
                color: "white",
                textTransform: "none",
                py: 1,
                "&:hover": { opacity: 0.9 },
              }}
            >
              Facebook
            </Button>

            <Button
              fullWidth
              sx={{
                bgcolor: "#db4437",
                color: "white",
                textTransform: "none",
                py: 1,
                "&:hover": { opacity: 0.9 },
              }}
            >
              Google
            </Button>

            <Button
              fullWidth
              sx={{
                bgcolor: "#1DA1F2",
                color: "white",
                textTransform: "none",
                py: 1,
                "&:hover": { opacity: 0.9 },
              }}
            >
              Twitter
            </Button>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
