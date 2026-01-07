import { TextField, Paper, Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const transferUser = useNavigate();
  const [formData, setFormData] = useState({
    identityNumber: "",
    password: "",
  });
  async function changeInputFieldValue(
    element: React.ChangeEvent<HTMLInputElement>
  ) {
    setFormData({ ...formData, [element.target.name]: element.target.value });
    console.log(formData);
  }
  async function sendDataForUser() {
    const response = await fetch("http://localhost:5000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    const responseData = await response.json();
    if (response.ok && responseData.message === "That Is An Admin") {
      transferUser("/manager's-dashboard/overview");
    }
  }
  return (
    <>
      <div className="parent">
        <div className="bg-[#3B82F6] landing text-center flex justify-center font-bold text-white text-2xl flex-col h-[50vh]">
          <h1>Welcome To Osama Jehadist School📘</h1>
          <p>Here You Can Find Your Assignments, Exams, Marks,</p>
        </div>
        <Box
          component={Paper}
          className="w-[60%] my-box mx-auto form flex items-center p-4! mt-4! flex-col gap-4"
        >
          <h1 className="text-2xl font-bold">Login</h1>
          <TextField
            onChange={changeInputFieldValue}
            label="Identity Number"
            name="identityNumber"
            className="w-full"
            inputProps={{
              maxLength: 9,
            }}
          />
          <TextField
            label="Password"
            onChange={changeInputFieldValue}
            className="w-full text-red-600"
            name="password"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendDataForUser();
              }
            }}
          ></TextField>
          <Button
            variant="contained"
            className="capitalize! w-full bg-[#3B82F6]"
            onClick={sendDataForUser}
          >
            Submit
          </Button>
        </Box>
      </div>
    </>
  );
}

export default HomePage;
