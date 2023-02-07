import React, { useContext } from "react";
import { ThemeContext, UserContext } from "../util/context";

export default function Main() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <div className={`row border m-3 ${theme}`}>
      <div style={{ color: theme == "bg-dark" ? "white" : "black" }}>
        <h1>Welcome {user}</h1>
        <p>qwe qwe qwe</p>
      </div>
      <div className="p-2" style={{ backgroundColor: "white" }}>
        <label>Dark mode</label>
        <input
          type={"checkbox"}
          onChange={(e) => {
            setTheme(e.target.checked ? "bg-light" : "bg-dark");
          }}
        />
      </div>
    </div>
  );
}
