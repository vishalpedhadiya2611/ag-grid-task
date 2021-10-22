import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
} from "../constant/types";
const iniatialState = {
  itemList: [
    {
      id: 1,
      name: "Item 1",
      status: "1",
    },
    {
      id: 2,
      name: "Item 2",
      status: "2",
    },
    {
      id: 3,
      name: "Item 3",
      status: "1",
    },
  ],
  contact: {},
};

const itemReducer = (state = iniatialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        itemList: [...state.itemList, action.payload],
      };
    case GET_CONTACT:
      let arr = state.itemList.filter(
        (contact) => contact.id == action.payload
      );
      return {
        ...state,
        contact: arr[0],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        itemList: state.itemList.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        itemList: state.itemList.filter((item) => item.id != action.payload),
      };
    default:
      return state;
  }
};

export default itemReducer;
