import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem, updateItem } from "../../redux/action/contactAction";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditItem = () => {
  axios.defaults.baseURL = "http://localhost:3000";
  let history = useHistory();
  let { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item.contact);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("0");

  useEffect(() => {
    if (item != null) {
      setName(item.name);
      setStatus(item.status);
    }
    dispatch(getItem(id));
  }, [item]);

  const onupdateItem = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(item, {
      name: name,
      status: status,
    });
    axios({
      method: "put",
      url: `/programs/${item.id}/edit`,
      data: {
        name: name,
        status: status,
      },
    })
      .then((res) => {
        dispatch(updateItem(update_contact));
      })
      .catch(() => {
        dispatch(updateItem(update_contact));
      });
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Edit Item</div>
      <div className="card-body">
        <form onSubmit={(e) => onupdateItem(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="0">Select Status</option>
            <option value="1">Active</option>
            <option value="2">Deactive</option>
          </select>
          <button className="btn btn-primary" type="submit">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
