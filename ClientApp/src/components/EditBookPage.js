import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBookPage = () => {
  const [author, setAuthor] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getBookById();
  }, []);

  const getBookById = () => {
    axios
      .get(`https://localhost:7186/api/Book/getBookById?id=${params.id}`)
      .then((response) => {
        const data = response.data;

        setAuthor(data.author);
        setName(data.name);
        setDescription(data.description);
        setTotalPages(data.totalPages);
      })
      .catch((error) => {
        alert("error occured while fetching .");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var updatedData = {
      id: params.id,
      author: author,
      name: name,
      description: description,
      totalPages: totalPages,
    };
    axios
      .put("https://localhost:7186/api/Book", updatedData)
      .then((response) => {
        if (response.status == 200) {
          navigate(`/book`);
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
              value={author}
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
              value={name}
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
            value={description}
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
            type="text"
            name="name"
            value={totalPages}
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
};

export default EditBookPage;
