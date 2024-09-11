import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Typography, Box, Button } from "@mui/material";
import { UserModal } from "../components/Table/UserModal";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

export const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const user = users.find((user) => user.id === id);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (!user) {
    return (
      <Container>
        <Typography variant="h6">User not found</Typography>
      </Container>
    );
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ pb: "50px" }}>
      <Box sx={{ height: "30px" }} />

      <Container>
        <Typography variant="h5" align="center" gutterBottom>
          User Details
        </Typography>
      </Container>

      <Container>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Name: {user.name}</Typography>
          <Typography variant="h6">Email: {user.email}</Typography>
          <Typography variant="h6">Phone: {user.phone}</Typography>
          <Typography variant="h6">
            Info: {user.info || "No additional information available"}
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={handleOpenModal}
        >
          Edit User
        </Button>
        <Button variant="outlined" sx={{ ml: 2 }} onClick={handleGoBack}>
          Go Back
        </Button>
      </Container>
      <UserModal
        open={openModal}
        handleClose={handleCloseModal}
        userToEdit={user}
      />
    </Box>
  );
};
