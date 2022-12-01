import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const Profile = () => {
  return (
    <Container component="main" sx={{ mb: 5 }}>
      {/* <Card sx={{ margin: "16px auto", width: "75vw" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Avatar
                sx={{ bgcolor: deepPurple[500], width: "10vw", height: "10vw" }}
              >
                Photo
              </Avatar>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="h2"
                sx={{
                  color: "black",
                  mt: 2,
                  fontSize: "56px",
                  fontWeight: 800,
                }}
              >
                Viraj Bhingare
              </Typography>
              <Typography
                variant="subtitle"
                sx={{
                  color: "black",
                  mt: 2,
                  fontSize: "24px",
                  fontWeight: 800,
                }}
              >
                Student
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card> */}

      <Card sx={{ maxWidth: 1440 }}>
        <CardHeader
          title="Viraj Bhingare"
          titleTypographyProps={{ variant: "h4" }}
          subheader="Student"
          subheaderTypographyProps={{ variant: "h4" }}
          avatar={
            <Avatar
              sx={{
                bgcolor: blue[900],
                height: "10vw",
                width: "10vw",
              }}
            ></Avatar>
          }
        />
      </Card>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5">Personal Information</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={5}>
            <Typography variant="body1">First Name</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Viraj</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Middle Name</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Sanjay</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Last Name</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Bhingare</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Date of Birth</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">DD/MM/YYYY</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Address</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium hic nihil maiores aperiam blanditiis minus, fuga
              quibusdam accusamus magnam similique? Eligendi ullam harum dolores
              aspernatur!
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Contact Information</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={5}>
            <Typography variant="body1">Email Address</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Viraj</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Phone Number</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Sanjay</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Educational Information</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={5}>
            <Typography variant="body1">Branch</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">CMPN</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Division</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">A</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Roll Number</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">19102A0017</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Engg. Aggeregate</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">10.00</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">Diploma Percentage</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">-</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">HSC Percentage</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">90.00</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">SSC</Typography>
          </Grid>
          <Grid item xs={2}>
            :
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1">95.00</Typography>
          </Grid>
        </Grid>
      </Box>

      <Button sx={{ mt: 5 }} variant="outlined">
        Edit Profile
      </Button>
    </Container>
  );
};

export default Profile;
