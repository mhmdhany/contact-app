import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addContact } from "../store/actions/actions";

function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const contact = useSelector((state) => state);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // Add New Contact
  const addNewContact = (e) => {
    e.preventDefault();
    // Validation of the inputs
    const checkEmailExist = contact.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkPhoneExist = contact.filter((contact) =>
      contact.phone === phone ? contact : null
    );
    if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    // Toasty widgets
    if (checkEmailExist.length > 0) {
      toast.error("This email already exists!!");
    } else if (checkPhoneExist.length > 0) {
      toast.error("This phone already exists!!");
    } else {
      dispatch(
        addContact({
          id: contact.length + 1,
          name,
          phone,
          email,
        })
      );
      toast.success("Contact Added Successfully .");
      // Go to Home
      navigate("/");
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <h2 className="mt-3 text-cente fw-bolder">Add Contact</h2>
        <div className="row">
          <div className="col-md-6 mx-auto my-5">
            <form onSubmit={addNewContact} className="shadow p-5">
              <div className="form-group my-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group my-4">
                <input
                  type="submit"
                  value="Add Student"
                  className="form-control btn btn-dark"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
