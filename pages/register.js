import { Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/client";

const firebase = app;

const auth = getAuth();

const register = () => {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState();
  return (
    <>
      <h1>Register</h1>
      <label>User</label>
      <input onKeyUp={(e) => setUser(e.target.value)}></input>
      <label>Password</label>
      <input onKeyUp={(e) => setPassword(e.target.value)}></input>
      <Button onClick={() => createUserWithEmailAndPassword(User, Password)}>
        Register
      </Button>
    </>
  );
};

export default register;
