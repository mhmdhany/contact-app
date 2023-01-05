import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "../actions/actions";
let initState = [
  {
    id: 1,
    name: "Ali",
    phone: "0103456123",
    email: "m@gmail.com",
  },
  {
    id: 2,
    name: "Mohamed",
    phone: "01158239794",
    email: "mhani@gmail.com",
  },
];
// Contact Reducer
export const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      const deletedContact = state.filter(
        (contact) => contact.id !== action.payload
      );
      state = deletedContact;
      return state;
    case EDIT_CONTACT:
      const updatedContact = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = updatedContact;
      return state;
    default:
      return state;
  }
};
