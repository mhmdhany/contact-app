import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../store/actions/actions";
import Navbar from "./Navbar";

function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12 text-end ms-auto">
            <Link to="/add" className="btn btn-outline-dark">
              Add Contact
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <table className="table table-hover">
              <thead className="table-header bg-dark text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">phone</th>
                  <th scope="col">email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Check if No Contacts are found */}
                {state.length > 0 ? (
                  // Get Contact Info
                  state.map((contact) => {
                    return (
                      <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                        <td>
                          {/* GO TO EDIT PAGE */}
                          <Link
                            to={`/edit/${contact.id}`}
                            className="btn btn-primary me-3"
                          >
                            Edit
                          </Link>
                          {/*  Delete Button*/}
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(contact.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <p className="fw-bolder py-4 text-danger">
                    No contacts found
                  </p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
