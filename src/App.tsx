import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
// import ManagerDashboardComponent from "./Components/ManagerDashboard";
import OverviewComponent from "./Components/DashboardComponents/Overview";
import StudentsManagementsPage from "./Components/DashboardComponents/StudentsManagement";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/manager's-dashboard/overview" element={<OverviewComponent />}></Route>
          <Route path="/manager's-dashboard/students-management" element={<StudentsManagementsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
