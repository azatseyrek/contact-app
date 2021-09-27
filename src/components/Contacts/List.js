import React from "react";

import { contactSelector } from "../../redux/contactSlice";

import { useSelector } from "react-redux";
import Item from "./Item";
const List = () => {
  const contacts = useSelector(contactSelector.selectAll);


  console.log(contacts);

  return (
    <div>
      {contacts.map((contact) => (
        <Item key={contact.id} item={contact} />
      ))}
    </div>
  );
};

export default List;
