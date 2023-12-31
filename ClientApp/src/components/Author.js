import React, { Component, forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import {
  Button,
  Dialog,
  DialogContent,
  Fade,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const Author = () => {
  const [authors, setAuthors] = useState([]);
  const [openDeleteConfirmationBox, setOpenDeleteConfirmationBox] =
    useState(false);
  const [selectedAuthorId, setSelectedAuthorId] = useState(null);

  useEffect(() => {
    getAllAuthors();
  }, []);

  const getAllAuthors = () => {
    axios
      .get("https://localhost:7186/api/Author")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        alert("error occured while fetching authors.");
      });
  };

  const showDeleteConfirmationBox = (id) => {
    setOpenDeleteConfirmationBox(true);
    setSelectedAuthorId(id);
  };

  const cancelDeleteConfirmationBox = () => {
    setOpenDeleteConfirmationBox(false);
  };

  const onClickDeleteConfirmationBox = () => {
    if (selectedAuthorId == null) {
      alert("Author not Selected");
    } else {
      axios
        .delete(
          `https://localhost:7186/api/Author?authorId=${selectedAuthorId}`
        )
        .then(getAllAuthors);
      {
        setOpenDeleteConfirmationBox(false);
      }
    }
  };

  return (
    <div>
      <h1>Authors</h1>

      <Link to="/create-author" class="btn btn-primary">
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
          {authors.map((x) => {
            return (
              <tr>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.email}</td>
                <td>
                  <Link to={`/edit-author/${x.id}`} className="btn btn-success">
                    Edit
                  </Link>

                  <Link
                    onClick={() => showDeleteConfirmationBox(x.id)}
                    class="btn btn-danger"
                    style={{ marginLeft: "5px " }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Dialog
        fullWidth
        open={openDeleteConfirmationBox}
        maxWidth="md"
        scroll="body"
        onClose={cancelDeleteConfirmationBox}
        //onBackdropClick={closeDialog}
        //TransitionComponent={Transition}
      >
        <DialogContent sx={{ px: 8, py: 6, position: "relative" }}>
          <IconButton
            size="medium"
            onClick={cancelDeleteConfirmationBox}
            sx={{ position: "absolute", right: "1rem", top: "1rem" }}
          >
            X
          </IconButton>

          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Box
                sx={{
                  mb: 3,
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">Please Confirm!</Typography>

                <Typography variant="body1">
                  Are you sure you want to delete this ?
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <Button
                onClick={() => cancelDeleteConfirmationBox()}
                size="medium"
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
              <Button
                onClick={() => onClickDeleteConfirmationBox()}
                size="medium"
                variant="contained"
                color="error"
              >
                Confirm
              </Button>{" "}
              <ToastContainer />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Author;
