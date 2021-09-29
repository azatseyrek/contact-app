import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

        <Link to={`edit/${item.id}`} className="editBtn"><i className="far fa-edit"></i></Link>
        </span>
      </div>

      <div className="deleteBtn">
        <span onClick={() => handleDelete(item.id)}>
          <i className="far fa-trash-alt"></i>
        </span>
      </div>
    </div>
  );
};

export default Item;
