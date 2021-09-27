import React from "react";
import Form from "./Form";
import List from "./List";

function Contacts() {
  return (
    <div className="loginbox">
      <h2> -----  Contacts  ----- </h2>
      <Form />
      <div>
        <List />
      </div>
    </div>
  );
}

export default Contacts;
