import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/action/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddItem = () => {
  axios.defaults.baseURL = "http://localhost:3000";
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("0");
  const items = useSelector((state) => state.item.itemList);
  const createItem = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `/programs`,
      data: {
        name: name,
        status: status,
      },
    })
      .then((res) => {
        const mew_Item = {
          id: items[items.length - 1].id + 1,
          name: name,
          status: status,
        };
        dispatch(addItem(mew_Item));
      })
      .catch(() => {
        const mew_Item = {
          id: items[items.length - 1].id + 1,
          name: name,
          status: status,
        };
        dispatch(addItem(mew_Item));
      });
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add New Item</div>
      <div className="card-body">
        <form onSubmit={(e) => createItem(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="0">Select Status</option>
              <option value="1">Active</option>
              <option value="2">Deactive</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
