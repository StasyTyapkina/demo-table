import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Typography, TextField, Box } from "@mui/material";
import { CollapsibleTable } from "../components/Table/CollapsibleTable";
import { UserModal } from "../components/Table/UserModal";
import { setSearchLine } from "../redux/usersSlice";

export const UserInfoPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const searchLine = useSelector((state) => state.users.searchLine);

  const handleOpen = (user = null) => {
    setUserToEdit(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserToEdit(null);
  };

  const handleSearchChange = (event) => {
    dispatch(setSearchLine(event.target.value));
  };

  return (
    <Box sx={{ pb: "50px" }}>
      <Box sx={{ height: "30px" }} />

      <Container>
        <Typography variant="h5" align="center" gutterBottom>
          User Information Page
        </Typography>
      </Container>

      <Container>
        <TextField
          fullWidth
          label="Filter"
          variant="standard"
          placeholder="Search..."
          type="search"
          value={searchLine}
          onChange={handleSearchChange}
        />
        <CollapsibleTable onEdit={handleOpen} />
      </Container>

      <Container
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "flex-start",
          gap: 2,
        }}
      >
        <Button variant="contained" onClick={() => handleOpen(null)}>
          Add new
        </Button>
        <Button variant="contained">Save</Button>
      </Container>

      <UserModal
        open={open}
        handleClose={handleClose}
        userToEdit={userToEdit}
      />
    </Box>
  );
};
