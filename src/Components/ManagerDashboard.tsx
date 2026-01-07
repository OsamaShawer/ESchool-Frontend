import { useEffect, useState } from "react";
import DashboardUI from "./DashboardUI";
export default function OverviewManagerDashboard() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    async function makeSureIfSignedIn() {
      const response = await fetch(
        "http://localhost:5000/manager's-dashboard",
        { credentials: "include" }
      );
      const responseData = await response.json();
      if (response.ok) {
        setAuth(true);
        console.log(responseData.message);
      } else {
        console.log(responseData.message);
      }
    }
    makeSureIfSignedIn();
  }, []);
  if (!auth)
    return (
      <div className="text-red-600 font-bold text-4xl text-center">Sign In</div>
    );
  return (
    <>
      <div className="parent flex">
      <DashboardUI />
        <div className="content pl-5!">Hello Osama</div>
        <div>{}</div>
      </div>
    </>
  );
}
