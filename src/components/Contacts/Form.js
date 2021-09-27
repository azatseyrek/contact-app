import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";

// import { addContact } from "../../redux/contactSlice";

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;
    // coklu isim eklemek icin asagidaki kod satirlari kullanilabilir

    // const names = name.split(",");

    // const data = names.map((name) => ({id: nanoid(), name: name})); data asagidaki dispatch isleminde addContact'e parametre olarak verilmeli

    dispatch(addContact({ id: nanoid(), name: name, phone_number: number }));

    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="userbox">
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="userbox">
          <input
            placeholder="phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div className='btn'>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
