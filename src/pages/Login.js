import React, { useState } from "react";
import {
  Link,
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core/";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        placement system
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url("https://media.istockphoto.com/photos/firewall-and-internet-security-concept-secured-access-picture-id1279862993?b=1&k=20&m=1279862993&s=170667a&w=0&h=8DncJ1MqYAf1G5j7ncNjGl9BkZtlgWJByC2j3gcw1Sg=") `,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, cred.email, cred.password).then(
        async (res) => {
          const docRef = await addDoc(collection(db, "users"), {
            admin:
              res.user.email === "yogeshyewale2001@gmail.com" ? true : false,
            userId: res.user.uid,
          });
          console.log("Document written with ID: ", docRef.id);
          toast.success("Logged In successfully");
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  const handleReset = () => {
    sendPasswordResetEmail(auth, cred.email)
      .then(() => {
        toast.warning("Password reset email sent to registered mail !! ");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Password reset failed . please try again!! ");
      });
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type={"email"}
              id="email"
              label="Email Address"
              name="email"
              value={cred.email}
              onChange={(e) => setCred({ ...cred, email: e.target.value })}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={cred.password}
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={handleReset}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
