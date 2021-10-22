import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../constant/types";
export const addItem = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

// get contact
export const getItem = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

// update contact
export const updateItem = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

// DELETE CONTACT
export const deleteItem = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});
