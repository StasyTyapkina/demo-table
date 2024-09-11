import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  TableRow,
  TableCell,
  Button,
  Box,
  Collapse,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { deleteUser } from "../../redux/usersSlice";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

export const StyledRowButton = styled(Button)(() => ({
  width: "35px",
  height: "30px",
  minWidth: 0,
  marginRight: "10px",

  "& svg": {
    height: "15px",
  },
}));

export const Row = ({ row, onEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleNavigate = (id) => {
    navigate(`/user/${row.id}`);
  };

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.phone}</TableCell>
        <TableCell align="right">
          <StyledRowButton
            variant="contained"
            onClick={() => handleNavigate(row.id)}
          >
            <OpenInNewIcon />
          </StyledRowButton>
          <StyledRowButton
            variant="contained"
            color="error"
            onClick={() => handleDelete(row.id)}
          >
            <DeleteIcon />
          </StyledRowButton>
          <StyledRowButton
            sx={{ background: "#199fd2" }}
            variant="contained"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </StyledRowButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto">
            <Box sx={{ m: 1 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                {row.info}
              </Typography>

              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={() => onEdit(row)}
              >
                Edit info
              </Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};
