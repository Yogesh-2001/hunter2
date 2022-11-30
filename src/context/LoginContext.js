import React, { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export const UserContext = createContext();

const LoginContext = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [comments, setComments] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser);
      setLoggedInUser({
        uid: currentuser?.uid,
        displayName: currentuser.displayName,
        email: currentuser.email,
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "forum"), orderBy("timeStamp", "desc")),
      (querySnapshot) => {
        const comment = [];
        querySnapshot.forEach((doc) => {
          comment.push({ ...doc.data(), commentUid: doc.id });
        });
        setComments(comment);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "entries"), orderBy("postedAt", "desc")),
      (querySnapshot) => {
        const company = [];
        querySnapshot.forEach((doc) => {
          company.push({ ...doc.data(), companyId: doc.id });
        });
        setCompanies(company);
      }
    );

    return () => unsubscribe();
  }, []);

  const options = {
    loggedInUser,
    setLoggedInUser,
    comments,
    companies,
  };
  return (
    <UserContext.Provider value={options}>{children}</UserContext.Provider>
  );
};

export default LoginContext;
