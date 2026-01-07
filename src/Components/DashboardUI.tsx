import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
interface DashboardInterface {
  dashboardShown: boolean;
  setDashboardShown: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function DashboardUI({
  dashboardShown,
  setDashboardShown,
}: DashboardInterface) {
  const location = useLocation();

  return (
    <>
      <div
        className={`${
          dashboardShown
            ? `opacity-0 duration-200`
            : `bg-blue-600 w-10 relative min-h-screen`
        } -z-50`}
      >
        <FontAwesomeIcon
          className="text-white absolute top-2.5 right-2.5 duration-500 dashboard-arrow"
          icon={faArrowLeft}
          onClick={() => setDashboardShown(dashboardShown ? false : true)}
        />
      </div>
      <div
        className={
          dashboardShown
            ? `relative dashboard min-h-screen p-4! bg-blue-600 text-white`
            : "hidden"
        }
      >
        <div>Manager Dashboard</div>
        <Link
          to="/manager's-dashboard/overview"
          className={`dashboard-link ${
            location.pathname === "/manager's-dashboard/overview"
              ? "bg-[#003fed]"
              : ""
          }`}
        >
          Main Overview
        </Link>
        <Link
          to="/manager's-dashboard/students-management"
          className={`dashboard-link ${
            location.pathname === "/manager's-dashboard/students-management"
              ? "bg-[#003fed]"
              : ""
          }`}
        >
          Students Management
        </Link>
        <Link
          to="/manager's-dashboard/teachers-management"
          className={`dashboard-link ${
            location.pathname === "/manager's-dashboard/teachers-management"
              ? "bg-[#003fed]"
              : ""
          }`}
        >
          Teacher Management
        </Link>
        <Link
          to="/manager's-dashboard/subjects-management"
          className={`dashboard-link ${
            location.pathname === "/manager's-dashboard/subjects-management"
              ? "bg-[#003fed]"
              : ""
          }`}
        >
          Subjects Management
        </Link>
        <Link
          to="/manager's-dashboard/exams-and-grades"
          className={`dashboard-link ${
            location.pathname === "/manager's-dashboard/exams-and-grades"
              ? "bg-[#003fed]"
              : ""
          }`}
        >
          Exams & Grades Management
        </Link>
        <Link
          to="/manager's-dashboard/attendance-management"
          className={`dashboard-link ${
            location.pathname === "/manager's-dashboard/attendance-management"
              ? "bg-[#003fed]"
              : ""
          }`}
        >
          Attendance Management
        </Link>
        <Link
          to="/manager's-dashboard/finance-management"
          className={`dashboard-link ${
            location.pathname === "/manager's-dashboard/finance-management"
              ? "bg-[#003fed]"
              : ""
          }`}
        >
          Finance Management
        </Link>
        <Link
          to="/manager's-dashboard/events-management"
          className={`dashboard-link ${
            location.pathname === "/manager's-dashboard/events-management"
              ? "bg-[#003fed]"
              : ""
          }`}
        >
          Events & Calendar
        </Link>
        <Link
          to="/manager's-dashboard/communication-management"
          className={`dashboard-link ${
            location.pathname ===
            "/manager's-dashboard/communication-management"
              ? "bg-[#003fed]"
              : ""
          }`}
        >
          Communication & Notifications
        </Link>
        <Link
          to="/manager's-dashboard/reports-and-analytics"
          className={`dashboard-link ${
            location.pathname === "/manager's-dashboard/reports-and-analytics"
              ? "bg-[#003fed]"
              : ""
          }`}
        >
          Analytics & Reports
        </Link>
        <FontAwesomeIcon
          onClick={() => setDashboardShown(!dashboardShown)}
          className="absolute top-2.5 right-2.5 duration-500 dashboard-arrow"
          icon={faArrowRight}
        ></FontAwesomeIcon>
      </div>
    </>
  );
}
