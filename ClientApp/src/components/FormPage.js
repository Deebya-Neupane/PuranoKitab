import React, { Component, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormPage = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    var newData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    axios
      .post("https://localhost:7186/api/Author", newData)
      .then((response) => {
        if (response.status == 200) {
          navigate(`/author`);
        }
      });

    toast.success("New record added successfully!", {
      position: "top-right",
      autoClose: 50000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handelFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handelLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handelEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label for="firstName"> First Name: </label>
            <input
              id="firstName"
              class="form-control"
              type="text"
              name="name"
              onChange={handelFirstNameChange}
              required
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label for="lastName"> Last Name: </label>
            <input
              id="lastName"
              class="form-control"
              type="text"
              name="name"
              onChange={handelLastNameChange}
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>
        <div class="col-sm-4">
          <label for="email"> Email: </label>
          <input
            id="email"
            class="form-control"
            type="email"
            name="email"
            onChange={handelEmailChange}
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
      </div>
      <div class="row  mt-3">
        <div class="col-sm-4">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
        <ToastContainer />
      </div>
    </form>
  );
};
export default FormPage;
