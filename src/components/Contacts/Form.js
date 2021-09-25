import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import { addContacts } from "../../redux/contactSlice";

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return false;
    const names = name.split(",");

    const data = names.map((name) => ({id: nanoid(), name: name}));

    dispatch(addContacts(data));

    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
