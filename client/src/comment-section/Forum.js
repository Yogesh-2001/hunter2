import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { UserContext } from "../context/LoginContext";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import Comments from "./Comments";
import LinearProgress from "@material-ui/core/LinearProgress";

const Forum = () => {
  const { comments, loggedInUser } = useContext(UserContext);
  const [question, setQuestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, `forum`), {
      question,
      timeStamp: serverTimestamp(),
      user: loggedInUser,
    })
      .then((response) => {
        toast.success("Comment added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <main className="col-11 mx-auto d-flex flex-wrap justify-content-between py-4">
        <form onSubmit={handleSubmit} className="col-lg-5 col-11 mx-auto ">
          <h4>Add Topic Of Discussion</h4>
          <TextField
            className="col-12 my-3"
            type="text"
            label="Enter Message"
            multiline
            minRows={4}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Add Comment
          </Button>
        </form>
        {comments ? (
          <section className="col-lg-6 col-12 mx-auto my-3 py-3">
            <Comments comments={comments} />
          </section>
        ) : (
          <LinearProgress color="secondary" />
        )}
      </main>
    </>
  );
};

export default Forum;
