import React from "react";
import { ALL_PNV_TEACHERS } from "./teachers.js";

// NO change to perform here...
export function User({ user }) {
  return (
    <div id="user" data-testid="user">
      <h2>
        {user.firstName} {user.lastName}{" "}
      </h2>
      <p> {user.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>PNV Team !!</h1>
      <p>Here are some PNV trainers and educators, do you know them?</p>
      {ALL_PNV_TEACHERS.map((teacher) =>
        <User user={teacher} />
      )}
    </div>
  );
}

export default App;
