import React, { useContext } from "react";
import { UserContext } from "../util/context";
import Login from "./Login";

export default function Nav() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div>{user ? <h1>Hello {user}</h1> : <Login />}</div>
    </div>
  );
}
