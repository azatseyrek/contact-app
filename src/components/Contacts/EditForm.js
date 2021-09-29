import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contactSlice";
import { useHistory } from "react-router-dom";

const EditForm = ({ contact }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;

    dispatch(
      editContact({
        id: contact.id,
        changes: {
          name : name,
          phone_number: number,
        },
      }),
      history.goBack()
    );


  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="userbox">
          <input
            className="mainLoginInput"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="userbox">
          <input
            className="mainLoginInput"
            placeholder="phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div className="btn">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
