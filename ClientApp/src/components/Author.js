import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Author extends Component {
  constructor(props) {
    super(props);
    this.state = { authors: [] };
    axios
      .get("https://localhost:7186/api/Author")
      .then((response) => {
        this.setState({
          authors: response.data,
        });
      })
      .catch((error) => {
        alert("error occured while fetching authors.");
      });
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>

        <Link to="/create-new" class="btn btn-primary">
          Add
        </Link>

        <table class="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.authors.map((x) => {
              return (
                <tr>
                  <td>{x.firstName}</td>
                  <td>{x.lastName}</td>
                  <td>{x.email}</td>
                  <td>
                    <button type="button" class="btn btn-info">
                      Edit
                    </button>
                    <Link
                      to="/confirm"
                      class="btn btn-danger"
                      style={{ marginLeft: "5px" }}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
