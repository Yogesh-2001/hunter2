import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "../context/LoginContext";
import { db } from "../firebase";
import { toast } from "react-toastify";
import Replies from "./Replies";

const Comment = ({ comment }) => {
  const [togglereply, setToggleReply] = useState(false);
  const [answer, setAnswer] = useState("");
  const { loggedInUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const path = `forum/${comment.commentUid}/answer`;
    await addDoc(collection(db, path), {
      answer,
      questionId: comment.commentUid,
      timeStamp: serverTimestamp(),
      user: loggedInUser,
    })
      .then((response) => {
        toast.success("Reply added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    setToggleReply(!togglereply);
  };
  return (
    <>
      <div className="d-flex">
        <p className="letter-circle">
          {comment.user.displayName.toUpperCase().substring(0, 1)}
        </p>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-person-circle me-3"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg> */}
        <h6>{comment.user.displayName}</h6>
        <span
          style={{
            color: "grey",
            marginLeft: "10px",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          {new Date(comment.timeStamp?.toDate()).toLocaleString()}
        </span>
      </div>
      <p className="ms-5">{comment.question}</p>
      <Button
        variant="outlined"
        color="secondary"
        className="ms-5 mb-3"
        onClick={() => setToggleReply(!togglereply)}
      >
        Reply
      </Button>
      {togglereply && (
        <>
          <form onSubmit={handleSubmit}>
            <TextField
              type={"text"}
              className="ms-5 mb-3 w-100"
              variant="standard"
              placeholder="Add a Reply...."
              value={answer}
              required
              onChange={(e) => setAnswer(e.target.value)}
            />
            <div className="d-flex justify-content-end">
              <Button
                variant="text"
                color="secondary"
                onClick={() => setToggleReply(!togglereply)}
              >
                Cancel
              </Button>
              <Button type="submit" variant="text" color="primary">
                Reply
              </Button>
            </div>
          </form>
        </>
      )}
      <Replies path={`forum/${comment.commentUid}/answer`} />
    </>
  );
};

export default Comment;
