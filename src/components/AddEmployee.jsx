import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    position: "",
    department: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/employees/add", formData);
      toast.success("Employee added successfully");
      setFormData({
        name: "",
        age: "",
        position: "",
        department: "",
        email: "",
      });
    } catch (error) {
      toast.error("Failed to add employee");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Age"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Position"
        name="position"
        value={formData.position}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add Employee
      </Button>
    </Box>
  );
};

export default AddEmployee;
