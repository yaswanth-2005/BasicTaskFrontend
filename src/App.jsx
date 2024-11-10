import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/DashboardPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AddEmployee from "./components/AddEmployee.jsx";
import EmployeeList from "./components/EmployeeList.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="dashboard/addEmployee" element={<AddEmployee />} />
        <Route path="dashboard/seeList" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default App;
