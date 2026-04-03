import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BrowseAllCard = () => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate("/products")}
      sx={{
        width: 280,
        height: 450,
        background: "#252525",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Browse All Products →
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BrowseAllCard;
