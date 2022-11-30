import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Accordion,
} from "@material-ui/core";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Replies = ({ path }) => {
  const [replies, setReplies] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, path), (querySnapshot) => {
      const reply = [];
      querySnapshot.forEach((doc) => {
        reply.push(doc.data());
      });
      setReplies(reply);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {replies.length > 0 && (
        <ul className="col-12 d-flex flex-column">
          <Accordion className="col-12">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography color="primary">Replies({replies.length})</Typography>
            </AccordionSummary>
            <AccordionDetails className="col-12 d-flex flex-wrap">
              {replies.map((reply, index) => (
                <>
                  <Typography className="col-12">
                    <li key={index} className="col-12">
                      <div className="d-flex col-12">
                        <p className="letter-circle">
                          {reply.user.displayName.toUpperCase().substring(0, 1)}
                        </p>
                        <h6>{reply.user?.displayName}</h6>
                        <span
                          style={{
                            color: "grey",
                            marginLeft: "10px",
                            fontSize: "16px",
                            fontWeight: "400",
                          }}
                        >
                          {new Date(reply.timeStamp?.toDate()).toLocaleString()}
                        </span>
                      </div>
                      <p className="ms-5">{reply.answer}</p>
                    </li>
                  </Typography>
                </>
              ))}
            </AccordionDetails>
          </Accordion>
        </ul>
      )}
    </>
  );
};

export default Replies;
