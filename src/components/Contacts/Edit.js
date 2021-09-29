import React from "react";
import {useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";

import { contactSelector, editContact } from "../../redux/contactSlice";
import EditForm from "./EditForm";

function Edit() {

  const { id } = useParams();

  const contact = useSelector((state) => contactSelector.selectById(state, id));


  if (!contact) {
      return <Redirect to="/" />
  }

  return (
    <div>
      <div className="edit_home">
        <h1>Edit</h1>
        
      </div>

      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
