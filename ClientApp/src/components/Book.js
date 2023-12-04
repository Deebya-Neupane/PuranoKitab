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

const Book = () => {
  const [books, setBooks] = useState([]);
  const [openDeleteConfirmationBox, setOpenDeleteConfirmationBox] =
    useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = () => {
    axios
      .get("https://localhost:7186/api/Book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        alert("error occured while fetching .");
      });
  };

  const showDeleteConfirmationBox = (id) => {
    setOpenDeleteConfirmationBox(true);
    setSelectedBookId(id);
  };

  const cancelDeleteConfirmationBox = () => {
    setOpenDeleteConfirmationBox(false);
  };

  const onClickDeleteConfirmationBox = () => {
    if (selectedBookId == null) {
      alert("Book not Selected");
    } else {
      axios
        .delete(`https://localhost:7186/api/Book?bookId=${selectedBookId}`)
        .then(getAllBooks);
      {
        setOpenDeleteConfirmationBox(false);
      }
    }
  };

  return (
    <div>
      <h1>Books</h1>

      <Link to="/create-book" class="btn btn-primary">
        Add
      </Link>

      <table class="table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Name</th>
            <th>Description</th>
            <th>TotalPages</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((x) => {
            return (
              <tr>
                <td>{x.author}</td>
                <td>{x.name}</td>
                <td>{x.description}</td>
                <td>{x.totalPages}</td>
                <td>
                  <Link to={`/edit-book/${x.id}`} className="btn btn-success">
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

export default Book;
