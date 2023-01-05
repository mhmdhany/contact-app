export const DELETE_CONTACT = "DELETE_CONTACT",
  ADD_CONTACT = "ADD_CONTACT",
  EDIT_CONTACT = "EDIT_CONTACT";

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};
export const updateContact = (contact) => {
  return {
    type: EDIT_CONTACT,
    payload: contact,
  };
};
