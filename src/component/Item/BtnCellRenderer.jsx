import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteItem } from "../../redux/action/contactAction";
import { useDispatch } from "react-redux";
const BtnCellRenderer = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const deleteItemFunction = (itemId) => {
    if (window.confirm("Are you  sure you want to delete?")) {
      dispatch(deleteItem(itemId));
    }
  };
  return (
    <div style={{ fontSize: "20px" }}>
      <span style={{ marginRight: "20px", cursor: "pointer" }}>
        <Link to={`contact/edit/${data.id}`}>
          <i className="bi bi-pencil-fill"></i>
        </Link>
      </span>
      <span
        onClick={() => deleteItemFunction(data.id)}
        style={{ cursor: "pointer" }}
      >
        <i className="bi bi-trash-fill"></i>
      </span>
    </div>
  );
};

export default BtnCellRenderer;
