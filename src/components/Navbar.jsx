import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (token) {
      const decoded = jwtDecode(token.split("=")[1]);
      setUsername(decoded.username);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await api.post("/auth/logout");
      if (response.status === 200) {
        toast.success("Logout successful");
        navigate("/");
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      toast.error(error.message || "Logout failed");
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Hello, Admin
        </Typography>
        <Button
          color="inherit"
          onClick={() => navigate("/dashboard/addEmployee")}
        >
          Add Employee
        </Button>
        <Button color="inherit" onClick={() => navigate("/dashboard/seeList")}>
          See List
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
