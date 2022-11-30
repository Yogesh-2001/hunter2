import React, { useRef, useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import { db } from "../firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { toast } from "react-toastify";

var emails = [];

const Editor = () => {
  useEffect(() => {
    const getDcs = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      querySnapshot.forEach((doc) => {
        emails.push(doc.data().email);
      });
      console.log("Hello there", emails);
    };
    getDcs();
  }, []);
  const [con, setCon] = useState({
    driveDate: " ",
    companyName: " ",
    editorData: null,
    fileUrl: " ",
  });

  // const [retrivedData, setRedtrivedData] = useState([])
  const [file, setFile] = useState(" ");
  const [progress, setProgress] = useState(0);

  const editor = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file)
      return toast.error("some error occured while uploading job description");
    else {
      const storageref = ref(storage, `job-descriptions/${file.name}`);
      const uploadTask = uploadBytesResumable(storageref, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (err) => {
          console.log(err);
        },
        () => {
          const uploaded = getDownloadURL(uploadTask.snapshot.ref);
          uploaded.then((downloadUrl) => {
            setCon({ ...con, fileUrl: downloadUrl });
            addDoc(collection(db, "entries"), {
              ...con,
              postedAt: serverTimestamp(),
            }).then(async (addedData) => {
              const docSnap = await getDoc(doc(db, "entries", addedData.id));

              axios.post("http://localhost:8080/send-mails", {
                emails: emails,
                content: docSnap.data(),
              });
            });
          });
        }
      );
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="col-md-8 mx-auto add-drive-form "
        encType="multipart/form-data"
      >
        <Typography variant="h4" color="textSecondary" className="my-4">
          Add new discussion
        </Typography>
        <div className="d-flex justify-content-between flex-wrap">
          <TextField
            id="standard-basic"
            variant="outlined"
            label="company name"
            className="col-md-5 col-12 my-2"
            name="companyName"
            value={con.companyName}
            placeholder="Enter company name.."
            onChange={(e) => setCon({ ...con, companyName: e.target.value })}
          />
          <TextField
            id="date"
            label="Drive date"
            name="driveDate"
            value={con.driveDate}
            onChange={(e) => setCon({ ...con, driveDate: e.target.value })}
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="col-md-5 col-12 my-2"
          />
        </div>
        <JoditEditor
          config={{ height: 400 }}
          ref={editor}
          value={con.editorData}
          tabIndex={1}
          onBlur={(newContent) => setCon({ ...con, editorData: newContent })}
          onChange={(newContent) => {}}
        />
        <TextField
          variant="outlined"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="col-md-5 col-12 my-3"
        />

        <br />
        {
          <Button
            className="text-center me-3 w-30"
            type="submit"
            variant="contained"
            color="primary"
          >
            Add Drive
          </Button>
        }

        <Button variant="contained" color="secondary">
          Clear
        </Button>
      </form>
    </>
  );
};

export default Editor;
