import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Row } from "./Row";

export const CollapsibleTable = ({ onEdit }) => {
  const users = useSelector((state) => state.users.users);
  const searchLine = useSelector((state) => state.users.searchLine);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchLine.toLowerCase())
  );
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="left">
              Email
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="left">
              Phone number
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <Row key={user.id} row={user} onEdit={onEdit} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
