import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditAuthorPage = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getAuthorById();
  }, []);

  const getAuthorById = () => {
    axios
      .get(`https://localhost:7186/api/Author/getAuthorById?id=${params.id}`)
      .then((response) => {
        const data = response.data;

        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
      })
      .catch((error) => {
        alert("error occured while fetching authors.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var updatedData = {
      id: params.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    axios
      .put("https://localhost:7186/api/Author", updatedData)
      .then((response) => {
        if (response.status == 200) {
          navigate(`/author`);
        }
      })
      .catch((error) => {
        toast.error(error.response.data, {
          position: "top-right",
          autoClose: 80000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
              value={firstName}
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
              value={lastName}
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
            value={email}
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
export default EditAuthorPage;
