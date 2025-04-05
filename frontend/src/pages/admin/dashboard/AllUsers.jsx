import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Popover,
  MenuItem,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersData, userReset } from "../../../features/users/userSlice";
import { BsFilter } from "react-icons/bs";

const AllUsers = () => {
  const { allUsers } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("all");
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    dispatch(getAllUsersData());
    dispatch(userReset());
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const newUsers =
      selected == "all"
        ? allUsers
        : allUsers.filter((item, index) => {
            return item.role == selected;
          });

    setFilteredUsers(newUsers);
  }, [selected, allUsers]);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gray-100 overflow-hidden p-4">
      {/* Blob animation */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob top-0 -left-10"></div>
        <div className="absolute w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 top-10 left-40"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 top-20 left-80"></div>
      </div>

      {/* Filter icon */}
      <div className="w-full max-w-4xl flex justify-end mb-4 z-10">
        <IconButton onClick={handleFilterClick}>
          <BsFilter />
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MenuItem onClick={() => setSelected("all")}>All</MenuItem>
          <MenuItem onClick={() => setSelected("student")}>Student</MenuItem>
          <MenuItem onClick={() => setSelected("teacher")}>Teacher</MenuItem>
        </Popover>
      </div>

      {/* Table with filtered users */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl z-10"
      >
        <TableContainer component={Paper} className="shadow-2xl rounded-2xl">
          <Table>
            <TableHead>
              <TableRow className="bg-[#24292D] text-white">
                <TableCell className="text-white font-bold">ID</TableCell>
                <TableCell className="text-white font-bold">Name</TableCell>
                <TableCell className="text-white font-bold">Email</TableCell>
                <TableCell className="text-white font-bold">Role</TableCell>
                <TableCell className="text-white font-bold">Update</TableCell>
                <TableCell className="text-white font-bold">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers?.map((user, index) => (
                <TableRow
                  key={user.id}
                  className="hover:bg-gray-100 transition duration-300"
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Button variant="contained" size="small" color="success">
                      Update
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ background: "red" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>
    </div>
  );
};

export default AllUsers;
