import React from "react";
import { contactSelector, removeAllContacts } from "../../redux/contactSlice";
import { useSelector } from "react-redux";
import Item from "./Item";
import { useDispatch } from "react-redux";



const List = () => {

  const total = useSelector(contactSelector.selectTotal);


  const contacts = useSelector(contactSelector.selectAll);
  console.log(contacts);

  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(removeAllContacts());
    }
  };

  return (
    <div>
      {contacts.map((contact) => (
        <Item key={contact.id} item={contact} />
      ))}

      {total>1 ? <div onClick={handleDeleteAll} className="clear_all">Delete All</div> : <div></div>  }

      
    </div>
  );
};

export default List;
