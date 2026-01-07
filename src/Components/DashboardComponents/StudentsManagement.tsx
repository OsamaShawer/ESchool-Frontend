import { Button, Paper, TextField, Tooltip } from "@mui/material";
import DashboardUI from "../DashboardUI";
import { useEffect, useState, type ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MuiTelInput } from "mui-tel-input";
import {
  faPencil,
  faPlus,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
export default function StudentsManagementsPage() {
  const [auth, setAuth] = useState<boolean | null>(null);
  const [dashboardShown, setDashboardShown] = useState(true);
  const [addPaper, setAddPaper] = useState(false);
  const [phone, setPhone] = useState<string>("");
  const [identityNumber, setIdentityNumber] = useState<string>("");

  const a = (e: ChangeEvent<HTMLInputElement>) =>
    setIdentityNumber(e.target.value);

  useEffect(() => {
    async function authAndFetchData() {
      const response = await fetch(
        "http://localhost:5000/students-management",
        {
          credentials: "include",
        }
      );
      if (response.ok) setAuth(true);
      else setAuth(false);
    }
    authAndFetchData();
  }, []);
  console.log(addPaper);
  if (auth === false)
    return (
      <div className="text-red-600 font-bold text-4xl text-center">Sign In</div>
    );
  else if (auth === null)
    return (
      <div className="text-red-600 font-bold text-4xl text-center">Loading</div>
    );
  return (
    // bg-[#8491a350]
    <div className={`relative parent flex flex-row`}>
      {addPaper && (
        <div
          className={`inset-0 fixed top-0 right-0 bg-[#39404890] min-h-screen z-10`}
        ></div>
      )}
      {addPaper && (
        <div
          className={
            addPaper
              ? "flex flex-row gap-5 w-full absolute top-1/2 left-1/8  z-20"
              : ""
          }
          style={{ display: addPaper ? "flex" : "none" }}
        >
          <Paper className="flex flex-col gap-3 p-5!">
            <div className="flex gap-2.5">
              <TextField
                required
                variant="outlined"
                label={`First Name`}
              ></TextField>
              <TextField
                required
                variant="outlined"
                label="Last Name"
              ></TextField>
            </div>
            <div className="flex gap-2.5">
              <TextField
                required
                variant="outlined"
                label={`Gender`}
              ></TextField>
              <TextField
                required
                variant="outlined"
                label={`Date Of Brith`}
              ></TextField>
            </div>
            <div className="flex gap-2.5">
              <TextField
                required
                variant="outlined"
                label={`Email`}
              ></TextField>
              <MuiTelInput
                value={phone}
                onChange={setPhone}
                required
                label={`Phone (+970)`}
                defaultCountry="PS"
                forceCallingCode
                style={{ width: "220px" }}
              ></MuiTelInput>
            </div>
            <div className="flex gap-2.5">
              <TextField
                required
                variant="outlined"
                label={`Address`}
              ></TextField>
              <TextField
                required
                variant="outlined"
                label={`Class Name`}
              ></TextField>
            </div>{" "}
            <div className="flex gap-2.5">
              <TextField
                required
                variant="outlined"
                label={`Status`}
              ></TextField>
              <TextField required variant="outlined" label={`Paid`}></TextField>
            </div>{" "}
            <div className="flex gap-2.5">
              <TextField
                required
                variant="outlined"
                label={`identityNumber`}
                value={identityNumber}
                onChange={a}
              ></TextField>
              <TextField
                variant="outlined"
                label={`Password`}
                required
                value={`os@${identityNumber.slice(0, 5)}`}
              ></TextField>
            </div>
            {<div className="cons">hello</div>}
          </Paper>
          <Paper className="relative flex flex-col gap-3 p-5!">
            <b>Gaurdian Information:</b>
            <div className="flex gap-2.5">
              <TextField
                required
                variant="outlined"
                label={`First Name`}
              ></TextField>
              <TextField
                variant="outlined"
                required
                label={`Last Name`}
              ></TextField>
            </div>
            <div className="flex gap-2.5">
              <TextField
                required
                variant="outlined"
                label={`Relation`}
              ></TextField>
              <TextField
                variant="outlined"
                required
                label={`Email`}
              ></TextField>
            </div>
            <div className="flex gap-2.5">
              <TextField
                variant="outlined"
                required
                label={`Phone`}
              ></TextField>
            </div>
            <div>
              <Tooltip title="Close" placement="top" arrow>
                <FontAwesomeIcon
                  className="hover:bg-white hover:text-red-600 hover:font-bold duration-200 absolute top-0 right-0 m-2! p-2! cursor-pointer bg-red-600 rounded-[50%] text-white"
                  icon={faX}
                  onClick={() => setAddPaper(false)}
                />
              </Tooltip>
            </div>
            <b className="w-100!">
              Marks Information: (You can keep them empty and your teachers will
              fill them)
            </b>
            <b>Math:</b>
            <TextField label=""></TextField>
          </Paper>
        </div>
      )}
      <div style={{ display: addPaper ? "none" : "" }}>
        <DashboardUI
          dashboardShown={dashboardShown}
          setDashboardShown={setDashboardShown}
        />
      </div>
      <div className="content px-10!">
        <h1 className="py-5! text-center font-bold">
          ``Overview About The School``
        </h1>
        <div className="buttons flex justify-evenly">
          <Tooltip>
          <Button
            onClick={async () => {
              setAddPaper(true);
            }}
            variant="contained"
          >
            Add
            <FontAwesomeIcon className="pl-1!" icon={faPlus} />
          </Button></Tooltip>
          <Button className="bg-[#FFC50F]!" variant="contained">
            Edit
            <FontAwesomeIcon className="pl-1!" icon={faPencil} />
          </Button>
          <Button className="bg-[#FF0000]!" variant="contained">
            Delete
            <FontAwesomeIcon className="pl-1!" icon={faTrash} />
          </Button>
        </div>
      </div>
    </div>
  );
}
