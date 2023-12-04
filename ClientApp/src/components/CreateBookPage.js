import React, { Component, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBookPage = () => {
  const [author, setAuthor] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    var newData = {
      author: author,
      name: name,
      description: description,
      totalPages: totalPages,
    };
    axios
      .post("https://localhost:7186/api/Book", newData)
      .then((response) => {
        if (response.status == 200) {
          navigate(`/book`);
        }
      });

    toast.success("New record added successfully!", {
      position: "top-right",
      autoClose: 80000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handelAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handelNameChange = (e) => {
    setName(e.target.value);
  };

  const handelDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  
  const handelTotalPagesChange = (e) => {
    setTotalPages(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div class="row">
      <div class="col-sm-3">
        <div class="form-group">
          <label for="author"> Author: </label>
          <input
            id="author"
            class="form-control"
            type="text"
            name="name"
            onChange={handelAuthorChange}
            required
          />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="name"> Name: </label>
          <input
            id="name"
            class="form-control"
            type="text"
            name="name"
            onChange={handelNameChange}
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
      </div>
      <div class="col-sm-3">
        <label for="description"> Description: </label>
        <input
          id="name"
          class="form-control"
          type="text"
          name="name"
          onChange={handelDescriptionChange}
          required
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="col-sm-3">
        <label for="totalPages"> TotalPages: </label>
        <input
          id="name"
          class="form-control"
          type="number"
          name="number"
          onChange={handelTotalPagesChange}
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
  
}

export default CreateBookPage;
