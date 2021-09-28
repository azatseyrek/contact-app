import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContact(id));
    }
  }; 

  return (
    <div className="items_list">
      <div>
        <span>{item.name}</span>
      </div>

      <div className="phone_number">
        <span>{item.phone_number}</span>
      </div>

      <div className="deleteBtn">
        <span onClick={() => handleDelete(item.id)}>x</span>
      </div>
    </div>
  );
};

export default Item;
