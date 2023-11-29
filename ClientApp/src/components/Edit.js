/*import axios from "axios";
import React, { useEffect, useState } from "react";

function Edit() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:7186/api/Author');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (formData.id) {
        
        await axios.put(`https://localhost:7186/api/Author/${formData.id}`, formData);
      } else {
        
        await axios.post('https://localhost:7186/api/Author', formData);
      }
      fetchData(); 
      setFormData({}); 
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleEdit = (item) => {
    setFormData(item); 
  };

  useEffect(() => {
    fetchData();
  }, []);


  
  useEffect(() => {
    axios
      .get("https://localhost:7186/api/Author" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  toast.success("Record edited successfully!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

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
              value={data.name}
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
              value={data.name}
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
            value={data.email}
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
      </div>
      <div class="row  mt-3">
        <div class="col-sm-4">
          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </div>
        <ToastContainer />
      </div>
    </form>
  );
}

export default Edit; */
