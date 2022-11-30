import { Box, Button, Typography } from "@mui/material";
import "../styles/homeSection.css";

const HomeSection = () => {
  return (
    <Box className="homeSection">
      <Typography className="home_heading" variant="h3">
        PLACEMENT MANAGEMENT SYSTEM
      </Typography>

      <Typography className="home_quotes" variant="">
        Success is no accident. It is hard work, perseverance, learning,
        studying, sacrifice and most of all, love of what you are doing or
        learning to do
      </Typography>

      <Button className="homeBtn" variant="contained">
        Current Drives
      </Button>
    </Box>
  );
};

export default HomeSection;
