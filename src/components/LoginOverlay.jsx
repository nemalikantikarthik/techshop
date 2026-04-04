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
  if (!open) return null;

  return (
    <Fade in={open} timeout={250}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.78)",
          backdropFilter: "blur(4px)",
          zIndex: 3000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
        onClick={onClose}
      >
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{
            width: 420,
            bgcolor: "#171726",
            p: 4,
            borderRadius: "14px",
            position: "relative",
            border: "1px solid rgba(124,58,237,0.35)",
            boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "#ddd6fe",
              "&:hover": { color: "#ffffff" },
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

          <Typography sx={{ color: "#c4b5fd", mb: 3 }}>
            New to Tech-Shop?{" "}
            <span
              style={{
                color: "#22c55e",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Create an account
            </span>
          </Typography>

          <TextField
            fullWidth
            placeholder="Email"
            variant="outlined"
            sx={{
              mb: 2,
              input: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#6d28d9" },
                "&:hover fieldset": { borderColor: "#8b5cf6" },
                "&.Mui-focused fieldset": { borderColor: "#22c55e" },
              },
            }}
          />

          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            variant="outlined"
            sx={{
              mb: 3,
              input: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#6d28d9" },
                "&:hover fieldset": { borderColor: "#8b5cf6" },
                "&.Mui-focused fieldset": { borderColor: "#22c55e" },
              },
            }}
          />

          <Button
            fullWidth
            sx={{
              background: "#7c3aed",
              color: "white",
              py: 1.2,
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": { background: "#6d28d9" },
            }}
          >
            Login
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 3,
              mb: 3,
            }}
          >
            <Divider sx={{ flex: 1, borderColor: "#444" }} />
            <Typography sx={{ color: "#bbb", mx: 2 }}>
              or login with
            </Typography>
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