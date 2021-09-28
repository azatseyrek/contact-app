import React from "react";
import { useSelector } from "react-redux";
import { contactSelector } from "../../redux/contactSlice";
import Form from "./Form";
import List from "./List";

function Contacts() {
  const total = useSelector(contactSelector.selectTotal);
  return (
    <div className="loginbox">
      <h2>Contacts ({total})</h2>
      <Form />
      <div>
        <List />
      </div>
    </div>
  );
}

export default Contacts;
