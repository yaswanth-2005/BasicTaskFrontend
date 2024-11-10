import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddEmployee from "../components/AddEmployee";
import EmployeeList from "../components/EmployeeList";

const Dashboard = () => (
  <div>
    <Navbar />
    <h1>Welcome to admin panel!</h1>
  </div>
);

export default Dashboard;
