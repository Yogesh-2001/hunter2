import { Typography } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { updateProfile } from "firebase/auth";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/LoginContext";
import "../styles/personaldetails.css";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";

const Personaldetails = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [editState, setEditState] = useState(false);
  const [details, setDetails] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    phoneNo: "",
    address: "",
    email: loggedInUser?.email,
    class10th: "",
    class12th: "",
    diploma: "",
    branch: "",
    rollno: "",
    division: "",
    liveKt: "No",
    engineeringAggrpercent: "",
  });

  const [avg, setAvg] = useState({
    sem1: "",
    sem2: "",
    sem3: "",
    sem4: "",
    sem5: "",
    sem6: "",
  });
  const handlechange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const calcAvg = async () => {
    const { sem1, sem2, sem3, sem4, sem5, sem6 } = avg;
    const sum =
      Number(sem1) +
      Number(sem2) +
      Number(sem3) +
      Number(sem4) +
      Number(sem5) +
      Number(sem6);

    let average = (sum / 6).toFixed(1);
    if (average < 7) {
      setDetails({
        ...details,
        engineeringAggrpercent: (7.1 * average + 12).toFixed(1),
      });
    } else {
      setDetails({
        ...details,
        engineeringAggrpercent: (7.4 * average + 12).toFixed(1),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await calcAvg();
    await updateProfile(loggedInUser, {
      displayName: details.firstname + " " + details.lastname,
    });
    // Add a new document with a generated id.
    await addDoc(collection(db, "details"), details)
      .then((response) => {
        toast.success("Personal Details added succcessfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="col-11 col-md-10  mx-auto d-flex flex-column ">
        <form onSubmit={handleSubmit}>
          <div
            className="pd-section d-flex flex-wrap"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h4" className="text-center my-3 w-100">
              Personal Details
            </Typography>
            <TextField
              required
              className="col-md-3 col-5 my-3 ms-2"
              type="text"
              label="First Name"
              name="firstname"
              value={details.firstname}
              onChange={handlechange}
            />
            <TextField
              required
              className="col-md-3 col-5 my-3"
              type="text"
              label="Middle Name"
              name="middlename"
              value={details.middlename}
              onChange={handlechange}
            />
            <TextField
              required
              className="col-md-3 col-8 my-3"
              type="text"
              label="Last Name"
              name="lastname"
              value={details.lastname}
              onChange={handlechange}
            />
            <TextField
              required
              className="col-md-3 col-12 my-3"
              type="date"
              label="dob"
              name={"dob"}
              value={details.dob}
              onChange={handlechange}
            />
            <TextField
              required
              className="col-md-3 col-12 my-3"
              type="number"
              label="Phone No"
              name="phoneNo"
              value={details.phoneNo}
              onChange={handlechange}
            />
            <TextField
              className="col-md-3 col-12 my-3"
              required
              multiline
              minRows={3}
              label="Address"
              placeholder="Enter Current Adresss.."
              name="address"
              value={details.address}
              onChange={handlechange}
            />
          </div>

          <div
            className=" pd-section d-flex flex-wrap"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h4" className="text-center my-3 w-100">
              class 10th / class 12th / Diploma Details
            </Typography>

            <TextField
              required
              className="col-md-3 col-5 my-3"
              type="text"
              label="class 10th %"
              name="class10th"
              value={details.class10th}
              onChange={handlechange}
            />
            <TextField
              required
              className="col-md-3 col-5 my-3"
              type="number"
              label="Diploma % "
              defaultValue={"NA"}
              name="class12th"
              value={details.class12th}
              onChange={handlechange}
            />
            <TextField
              required
              className="col-md-3 col-5 my-3"
              type="number"
              label="12th % "
              defaultValue={"NA"}
              name="diploma"
              value={details.diploma}
              onChange={handlechange}
            />
          </div>

          <div
            className="pd-section d-flex flex-wrap"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h4" className="text-center my-3 w-100">
              Engineering Details
            </Typography>
            <FormControl className="col-md-3 col-5 my-3 ms-2">
              <InputLabel id="demo-simple-select-label">Branch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="branch"
                value={details.branch}
                onChange={handlechange}
              >
                <MenuItem value={"Computer Engineering"}>
                  Computer Engineering
                </MenuItem>
                <MenuItem value={"IT Engineering"}>IT Engineering</MenuItem>
                <MenuItem value={"Electronics Engineering"}>
                  Electronics Engineering
                </MenuItem>
                <MenuItem value={"Electronics & Telecommunication Engineering"}>
                  Electronics & Telecommunication Engineering
                </MenuItem>
                <MenuItem value={"Bio-Medical Engineering"}>
                  Bio-Medical Engineering
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl className="col-md-3 col-5 my-3 ms-2">
              <InputLabel id="demo-simple-select-label">Division</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="division"
                value={details.division}
                onChange={handlechange}
              >
                <MenuItem value={"A"}>A</MenuItem>
                <MenuItem value={"B"}>B</MenuItem>
              </Select>
            </FormControl>
            <TextField
              required
              className="col-md-3 col-5 my-3 ms-2"
              type="number"
              label="sem 1 sgpa"
              value={avg.sem1}
              onChange={(e) => setAvg({ ...avg, sem1: e.target.value })}
            />
            <TextField
              required
              className="col-md-3 col-5 my-3 ms-2"
              type="number"
              label="sem 2 sgpa"
              value={avg.sem2}
              onChange={(e) => setAvg({ ...avg, sem2: e.target.value })}
            />
            <TextField
              className="col-md-3 col-5 my-3 ms-2"
              type="number"
              required
              label="sem 3 sgpa"
              value={avg.sem3}
              onChange={(e) => setAvg({ ...avg, sem3: e.target.value })}
            />
            <TextField
              required
              className="col-md-3 col-5 my-3 ms-2"
              type="number"
              label="sem 4 sgpa"
              value={avg.sem4}
              onChange={(e) => setAvg({ ...avg, sem4: e.target.value })}
            />
            <TextField
              required
              className="col-md-3 col-5 my-3 ms-2"
              type="number"
              label="sem 5 sgpa"
              value={avg.sem5}
              onChange={(e) => setAvg({ ...avg, sem5: e.target.value })}
            />
            <TextField
              className="col-md-3 col-5 my-3 ms-2"
              type="number"
              label="sem 6 sgpa"
              required
              value={avg.sem6}
              onChange={(e) => setAvg({ ...avg, sem6: e.target.value })}
            />
            <TextField
              className="col-md-3 col-5 my-3 ms-2"
              type="text"
              label="Roll No"
              required
              name="rollno"
              value={details.rollno}
              onChange={(e) =>
                setDetails({ ...details, rollno: e.target.value })
              }
            />
            <FormControl
              component="fieldset"
              className="d-flex col-md-4 col-8 my-3 ms-2"
            >
              <FormLabel component="legend">Live Kt's</FormLabel>
              <RadioGroup
                aria-label="livekt"
                name="liveKt"
                value={details.liveKt}
                onChange={handlechange}
                className="d-flex"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            {/* <TextField
              required
              className="col-md-3 col-10 my-3 ms-2"
              variant="standard"
              type="file"
              label="resume"
            /> */}
          </div>

          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            className="mx-auto my-3"
          >
            Submit Form
          </Button>
        </form>
      </section>
    </>
  );
};

export default Personaldetails;
