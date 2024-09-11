import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../../redux/usersSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "2%",
};

export const UserModal = ({ open, handleClose, userToEdit }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(userToEdit || {});
  }, [userToEdit, open]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    handleClose();
  };

  const handleSave = () => {
    if (userToEdit) {
      dispatch(editUser({ id: userToEdit.id, ...user }));
    } else {
      dispatch(addUser(user));
    }
    handleCloseModal();
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={style}>
        <h2>{userToEdit ? "Edit User" : "Add New User"}</h2>
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="dense"
          value={user.name || ""}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="dense"
          value={user.email || ""}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          margin="dense"
          value={user.phone || ""}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Info"
          name="info"
          margin="dense"
          multiline
          maxRows={4}
          value={user.info || ""}
          onChange={handleInputChange}
        />

        <Box mt={2} display="flex" justifyContent="flex-start">
          <Button
            variant="contained"
            onClick={handleCloseModal}
            color="error"
            sx={{ mr: "10px" }}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            {userToEdit ? "Save" : "Add"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
