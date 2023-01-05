import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateContact } from "../store/actions/actions";

function EditContact() {
  const { contactId } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const contacts = useSelector((state) => state);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(contactId)
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    setName(currentContact.name);
    setEmail(currentContact.email);
    setPhone(currentContact.phone);
  }, [currentContact]);

  // Edit Contact
  const editContact = (e) => {
    e.preventDefault();
    dispatch(
      updateContact({
        id: currentContact.id,
        name,
        phone,
        email,
      })
    );
    toast.success("Contact Updated Successfully .");
    navigate("/");
  };
  return (
    <div>
      <div className="container mt-5">
        <h2 className="mt-3 text-cente fw-bolder">Edit Contact</h2>
        <div className="row">
          <div className="col-md-6 mx-auto my-5">
            <form onSubmit={editContact} className="shadow p-5">
              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="number"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* Update Button */}
              <div className="form-group d-flex align-items-center justify-content-center my-2">
                <button type="submit" className="btn btn-primary me-2">
                  Update Contact
                </button>
                {/* Cancel Button */}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => navigate("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditContact;
