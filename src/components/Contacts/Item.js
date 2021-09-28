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
      <div className="itemName">
        <span>{item.name}</span>
      </div>

      <div className="phone_number">
        <span>{item.phone_number}</span>
      </div>

      <div className="editBtn">
        <span>

        <i class="far fa-edit"></i>
        </span>
      </div>

      <div className="deleteBtn">
        <span onClick={() => handleDelete(item.id)}>
          <i class="far fa-trash-alt"></i>
        </span>
      </div>
    </div>
  );
};

export default Item;
