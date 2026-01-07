import { useReactToPrint } from "react-to-print";
import type ClassStudentsCount from "../utils/ClassStudentsCount";
import type ClassTeachersCount from "../utils/ClassTeachersCount";
import type BackendDataInterface from "../utils/BackendDataInterface";
import type StudentaAttendance from "../utils/StudentaAttendance";
import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";
import DashboardUI from "../DashboardUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { autoTable } from "jspdf-autotable";

export default function OverviewComponent() {
  const [tableTotal, setTableTotal] = useState(false);
  const [attendanceVisibility, setAttendanceVisibility] = useState(true);

  const [dashboardShown, setDashboardShown] = useState(true);

  const afterPrint = () => {
    try {
      setSucceed(true);
      setTimeout(() => setSucceed(false), 4000);
    } catch (error) {
      console.log(error);
    }
  };

  const [succeed, setSucceed] = useState(false);

  const [backendData, setBackendData] = useState<BackendDataInterface>({
    totalStudents: 0,
    totalTeachers: 0,
    class5A: 0,
    class5B: 0,
    class5C: 0,
    class6A: 0,
    class6B: 0,
    class6C: 0,
    class7A: 0,
    class7B: 0,
    class7C: 0,
    class8A: 0,
    class8B: 0,
    class8C: 0,
    class9A: 0,
    class9B: 0,
    class9C: 0,
    class10A: 0,
    class10B: 0,
    class10C: 0,
    class11A: 0,
    class11B: 0,
    class11C: 0,
    class12A: 0,
    class12B: 0,
    class12C: 0,
    teachersClass5A: 0,
    teachersClass5B: 0,
    teachersClass5C: 0,
    teachersClass6A: 0,
    teachersClass6B: 0,
    teachersClass6C: 0,
    teachersClass7A: 0,
    teachersClass7B: 0,
    teachersClass7C: 0,
    teachersClass8A: 0,
    teachersClass8B: 0,
    teachersClass8C: 0,
    teachersClass9A: 0,
    teachersClass9B: 0,
    teachersClass9C: 0,
    teachersClass10A: 0,
    teachersClass10B: 0,
    teachersClass10C: 0,
    teachersClass11A: 0,
    teachersClass11B: 0,
    teachersClass11C: 0,
    teachersClass12A: 0,
    teachersClass12B: 0,
    teachersClass12C: 0,
    attendanceClass5A: {
      active: 0,
      absent: 0,
    },
    attendanceClass5B: {
      active: 0,
      absent: 0,
    },
    attendanceClass5C: {
      active: 0,
      absent: 0,
    },
    attendanceClass6A: {
      active: 0,
      absent: 0,
    },
    attendanceClass6B: {
      active: 0,
      absent: 0,
    },
    attendanceClass6C: {
      active: 0,
      absent: 0,
    },
    attendanceClass7A: {
      active: 0,
      absent: 0,
    },
    attendanceClass7B: {
      active: 0,
      absent: 0,
    },
    attendanceClass7C: {
      active: 0,
      absent: 0,
    },
    attendanceClass8A: {
      active: 0,
      absent: 0,
    },
    attendanceClass8B: {
      active: 0,
      absent: 0,
    },
    attendanceClass8C: {
      active: 0,
      absent: 0,
    },
    attendanceClass9A: {
      active: 0,
      absent: 0,
    },
    attendanceClass9B: {
      active: 0,
      absent: 0,
    },
    attendanceClass9C: {
      active: 0,
      absent: 0,
    },
    attendanceClass10A: {
      active: 0,
      absent: 0,
    },
    attendanceClass10B: {
      active: 0,
      absent: 0,
    },
    attendanceClass10C: {
      active: 0,
      absent: 0,
    },
    attendanceClass11A: {
      active: 0,
      absent: 0,
    },
    attendanceClass11B: {
      active: 0,
      absent: 0,
    },
    attendanceClass11C: {
      active: 0,
      absent: 0,
    },
    attendanceClass12A: {
      active: 0,
      absent: 0,
    },
    attendanceClass12B: {
      active: 0,
      absent: 0,
    },
    attendanceClass12C: {
      active: 0,
      absent: 0,
    },
    countAll: {
      active: 0,
      absent: 0,
    },
  });

  const [authVariable, setAuthVariable] = useState<boolean | null>(null);

  const [attendance, setAttendance] = useState<StudentaAttendance>({
    attendanceClass5A: {
      active: 0,
      absent: 0,
    },
    attendanceClass5B: {
      active: 0,
      absent: 0,
    },
    attendanceClass5C: {
      active: 0,
      absent: 0,
    },
    attendanceClass6A: {
      active: 0,
      absent: 0,
    },
    attendanceClass6B: {
      active: 0,
      absent: 0,
    },
    attendanceClass6C: {
      active: 0,
      absent: 0,
    },
    attendanceClass7A: {
      active: 0,
      absent: 0,
    },
    attendanceClass7B: {
      active: 0,
      absent: 0,
    },
    attendanceClass7C: {
      active: 0,
      absent: 0,
    },
    attendanceClass8A: {
      active: 0,
      absent: 0,
    },
    attendanceClass8B: {
      active: 0,
      absent: 0,
    },
    attendanceClass8C: {
      active: 0,
      absent: 0,
    },
    attendanceClass9A: {
      active: 0,
      absent: 0,
    },
    attendanceClass9B: {
      active: 0,
      absent: 0,
    },
    attendanceClass9C: {
      active: 0,
      absent: 0,
    },
    attendanceClass10A: {
      active: 0,
      absent: 0,
    },
    attendanceClass10B: {
      active: 0,
      absent: 0,
    },
    attendanceClass10C: {
      active: 0,
      absent: 0,
    },
    attendanceClass11A: {
      active: 0,
      absent: 0,
    },
    attendanceClass11B: {
      active: 0,
      absent: 0,
    },
    attendanceClass11C: {
      active: 0,
      absent: 0,
    },
    attendanceClass12A: {
      active: 0,
      absent: 0,
    },
    attendanceClass12B: {
      active: 0,
      absent: 0,
    },
    attendanceClass12C: {
      active: 0,
      absent: 0,
    },
    countAll: {
      active: 0,
      absent: 0,
    },
  });

  // Print attendance table as a reoprt
  const attendanceTableRef = useRef<HTMLDivElement>(null);
  const printAttendanceTable = useReactToPrint({
    contentRef: attendanceTableRef,
    documentTitle: "Attendance Reoprt",
    onAfterPrint: afterPrint,
  });
  function attendanceTablePDFFunction() {
    const attendanceTablePDF = new jsPDF();
    autoTable(attendanceTablePDF, {
      head: [["Class", "Active", "Absent"]],
      body: Object.keys(attendance).map((key) => [`Class: ${["1", "A"].includes(key[key.length - 3]) ? key.slice(-3) : key.slice(-2)}`, attendance[key as keyof StudentaAttendance].active, attendance[key as keyof StudentaAttendance].absent]),
      theme: "striped",
    
    });
    attendanceTablePDF.save("Attendance-Report.pdf");
  }

  // Print total students and teachers table as a report
  const totalTableRef = useRef<HTMLDivElement>(null);
  const printTotalTable = useReactToPrint({
    contentRef: totalTableRef,
    documentTitle: "Total Reoprt",
    onAfterPrint: afterPrint,
  });
  useEffect(() => {
    async function authAndFetchTotal() {
      const response = await fetch("http://localhost:5000/total", {
        credentials: "include",
      });
      if (response.ok) {
        setAuthVariable(true);
        const responseData = await response.json();
        const teacherTotal = responseData.totalTeachers;
        const studentsTotal = responseData.totalStudents;
        const classStudentsObjectCount: ClassStudentsCount =
          responseData.classStudeentsCountObject;
        const classTeachersObjectCount: ClassTeachersCount =
          responseData.teachersCount;
        const studentsAttendance: StudentaAttendance =
          responseData.studentsAttendance;
        setBackendData({
          totalStudents: studentsTotal,
          totalTeachers: teacherTotal,
          class5A: classStudentsObjectCount.class5A,
          class5B: classStudentsObjectCount.class5B,
          class5C: classStudentsObjectCount.class5C,
          class6A: classStudentsObjectCount.class6A,
          class6B: classStudentsObjectCount.class6B,
          class6C: classStudentsObjectCount.class6C,
          class7A: classStudentsObjectCount.class7A,
          class7B: classStudentsObjectCount.class7B,
          class7C: classStudentsObjectCount.class7C,
          class8A: classStudentsObjectCount.class8A,
          class8B: classStudentsObjectCount.class8B,
          class8C: classStudentsObjectCount.class8C,
          class9A: classStudentsObjectCount.class9A,
          class9B: classStudentsObjectCount.class9B,
          class9C: classStudentsObjectCount.class9C,
          class10A: classStudentsObjectCount.class10A,
          class10B: classStudentsObjectCount.class10B,
          class10C: classStudentsObjectCount.class10C,
          class11A: classStudentsObjectCount.class11A,
          class11B: classStudentsObjectCount.class11B,
          class11C: classStudentsObjectCount.class11C,
          class12A: classStudentsObjectCount.class12A,
          class12B: classStudentsObjectCount.class12B,
          class12C: classStudentsObjectCount.class12C,
          teachersClass5A: classTeachersObjectCount.teachersClass5A,
          teachersClass5B: classTeachersObjectCount.teachersClass5B,
          teachersClass5C: classTeachersObjectCount.teachersClass5C,
          teachersClass6A: classTeachersObjectCount.teachersClass6A,
          teachersClass6B: classTeachersObjectCount.teachersClass6B,
          teachersClass6C: classTeachersObjectCount.teachersClass6C,
          teachersClass7A: classTeachersObjectCount.teachersClass7A,
          teachersClass7B: classTeachersObjectCount.teachersClass7B,
          teachersClass7C: classTeachersObjectCount.teachersClass7C,
          teachersClass8A: classTeachersObjectCount.teachersClass8A,
          teachersClass8B: classTeachersObjectCount.teachersClass8B,
          teachersClass8C: classTeachersObjectCount.teachersClass8C,
          teachersClass9A: classTeachersObjectCount.teachersClass9A,
          teachersClass9B: classTeachersObjectCount.teachersClass9B,
          teachersClass9C: classTeachersObjectCount.teachersClass9C,
          teachersClass10A: classTeachersObjectCount.teachersClass10A,
          teachersClass10B: classTeachersObjectCount.teachersClass10B,
          teachersClass10C: classTeachersObjectCount.teachersClass10C,
          teachersClass11A: classTeachersObjectCount.teachersClass11A,
          teachersClass11B: classTeachersObjectCount.teachersClass11B,
          teachersClass11C: classTeachersObjectCount.teachersClass11C,
          teachersClass12A: classTeachersObjectCount.teachersClass12A,
          teachersClass12B: classTeachersObjectCount.teachersClass12B,
          teachersClass12C: classTeachersObjectCount.teachersClass12C,
          attendanceClass5A: studentsAttendance.attendanceClass5A,
          attendanceClass5B: studentsAttendance.attendanceClass5B,
          attendanceClass5C: studentsAttendance.attendanceClass5C,
          attendanceClass6A: studentsAttendance.attendanceClass6A,
          attendanceClass6B: studentsAttendance.attendanceClass6B,
          attendanceClass6C: studentsAttendance.attendanceClass6C,
          attendanceClass7A: studentsAttendance.attendanceClass7A,
          attendanceClass7B: studentsAttendance.attendanceClass7B,
          attendanceClass7C: studentsAttendance.attendanceClass7C,
          attendanceClass8A: studentsAttendance.attendanceClass8A,
          attendanceClass8B: studentsAttendance.attendanceClass8B,
          attendanceClass8C: studentsAttendance.attendanceClass8C,
          attendanceClass9A: studentsAttendance.attendanceClass9A,
          attendanceClass9B: studentsAttendance.attendanceClass9B,
          attendanceClass9C: studentsAttendance.attendanceClass9C,
          attendanceClass10A: studentsAttendance.attendanceClass10A,
          attendanceClass10B: studentsAttendance.attendanceClass10B,
          attendanceClass10C: studentsAttendance.attendanceClass10C,
          attendanceClass11A: studentsAttendance.attendanceClass11A,
          attendanceClass11B: studentsAttendance.attendanceClass11B,
          attendanceClass11C: studentsAttendance.attendanceClass11C,
          attendanceClass12A: studentsAttendance.attendanceClass12A,
          attendanceClass12B: studentsAttendance.attendanceClass12B,
          attendanceClass12C: studentsAttendance.attendanceClass12C,
          countAll: {
            active: studentsAttendance.countAll.active,
            absent: studentsAttendance.countAll.absent,
          },
        });
        setAttendance(studentsAttendance);
      } else {
        setAuthVariable(false);
      }
    }
    authAndFetchTotal();
  }, []);

  if (authVariable === false) {
    return (
      <div className="text-red-600 font-bold text-4xl text-center">Sign In</div>
    );
  } else if (authVariable === null) {
    return (
      <div className="text-red-600 font-bold text-4xl text-center">Loading</div>
    );
  }

  return (
    <>
      <div className="parent flex flex-row -z-10">
        <DashboardUI
          dashboardShown={dashboardShown}
          setDashboardShown={setDashboardShown}
        />
        <div className={`content ${dashboardShown ? "px-10" : "px-22"}`}>
          <h1 className="py-5! text-center font-bold">
            ``Overview About The School``
          </h1>
          <div className="flex flex-row flex-wrap gap-5 cards-holder justify-evenly">
            <Card className="w-[40%]! card flex justify-between items-center">
              <div>Students:</div>{" "}
              <span className="font-bold text-2xl">
                {backendData.totalStudents}
              </span>
            </Card>
            <Card className="w-[40%]! card flex justify-between items-center">
              <div>Teachers:</div>{" "}
              <span className="font-bold text-2xl">
                {backendData.totalTeachers}
              </span>
            </Card>
            <Card className="w-[40%]! card flex justify-between items-center">
              <div>Actives:</div>{" "}
              <span className="font-bold text-2xl">
                {backendData.countAll.active}
              </span>
            </Card>
            <Card className="w-[40%]! card flex justify-between items-center">
              <div>Absent:</div>{" "}
              <span className="font-bold text-2xl">
                {backendData.countAll.absent}
              </span>
            </Card>
          </div>
          <hr className="py-5!" />
          ``
          <h1 className="py-5! text-center font-bold">
            `` Numbers Of Students & Teachers``
          </h1>
          <Table ref={totalTableRef} className="relative rounded-xl!" component={Paper}>
            <div className="absolute top-2.5 right-2.5 flex gap-4">
              <FontAwesomeIcon
                onClick={() => setTableTotal(!tableTotal)}
                className={`duration-500 ${
                  attendanceVisibility ? "rotate-90" : "-rotate-90"
                } dashboard-arrow`}
                icon={faArrowRight}
              />
              <FontAwesomeIcon
                onClick={printTotalTable}
                icon={faPrint}
                className="cursor-pointer"
              />
            </div>

            <TableHead>
              <TableRow className="bg-[#1abd9c]">
                <TableCell className="text-white!">Data</TableCell>
                <TableCell className="text-white!">Students</TableCell>
                <TableCell className="text-white!">Teachers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ display: tableTotal ? "none" : "" }}>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell>{backendData.totalStudents}</TableCell>
                <TableCell>{backendData.totalTeachers}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 5A</TableCell>
                <TableCell>{backendData.class5A}</TableCell>
                <TableCell>{backendData.teachersClass5A}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 5B</TableCell>
                <TableCell>{backendData.class5B}</TableCell>
                <TableCell>{backendData.teachersClass5B}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 5C</TableCell>
                <TableCell>{backendData.class5C}</TableCell>
                <TableCell>{backendData.teachersClass5C}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 6A</TableCell>
                <TableCell>{backendData.class6A}</TableCell>
                <TableCell>{backendData.teachersClass6A}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 6B</TableCell>
                <TableCell>{backendData.class6B}</TableCell>
                <TableCell>{backendData.teachersClass6B}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 6C</TableCell>
                <TableCell>{backendData.class6C}</TableCell>
                <TableCell>{backendData.teachersClass6C}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 7A</TableCell>
                <TableCell>{backendData.class7A}</TableCell>
                <TableCell>{backendData.teachersClass7A}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 7A</TableCell>
                <TableCell>{backendData.class7A}</TableCell>
                <TableCell>{backendData.teachersClass7A}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 7B</TableCell>
                <TableCell>{backendData.class7B}</TableCell>
                <TableCell>{backendData.teachersClass7B}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 7C</TableCell>
                <TableCell>{backendData.class7C}</TableCell>
                <TableCell>{backendData.teachersClass7C}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 8A</TableCell>
                <TableCell>{backendData.class8A}</TableCell>
                <TableCell>{backendData.teachersClass8A}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 8B</TableCell>
                <TableCell>{backendData.class8B}</TableCell>
                <TableCell>{backendData.teachersClass8B}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 8C</TableCell>
                <TableCell>{backendData.class8C}</TableCell>
                <TableCell>{backendData.teachersClass8C}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 9A</TableCell>
                <TableCell>{backendData.class9A}</TableCell>
                <TableCell>{backendData.teachersClass9A}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 9B</TableCell>
                <TableCell>{backendData.class9B}</TableCell>
                <TableCell>{backendData.teachersClass9B}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 9C</TableCell>
                <TableCell>{backendData.class9C}</TableCell>
                <TableCell>{backendData.teachersClass9C}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 10A</TableCell>
                <TableCell>{backendData.class10A}</TableCell>
                <TableCell>{backendData.teachersClass10A}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 10B</TableCell>
                <TableCell>{backendData.class10B}</TableCell>
                <TableCell>{backendData.teachersClass10B}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 10C</TableCell>
                <TableCell>{backendData.class10C}</TableCell>
                <TableCell>{backendData.teachersClass10C}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 11A</TableCell>
                <TableCell>{backendData.class11A}</TableCell>
                <TableCell>{backendData.teachersClass11A}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 11B</TableCell>
                <TableCell>{backendData.class11B}</TableCell>
                <TableCell>{backendData.teachersClass11B}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 11C</TableCell>
                <TableCell>{backendData.class11C}</TableCell>
                <TableCell>{backendData.teachersClass11C}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 12A</TableCell>
                <TableCell>{backendData.class12A}</TableCell>
                <TableCell>{backendData.teachersClass12A}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 12B</TableCell>
                <TableCell>{backendData.class12B}</TableCell>
                <TableCell>{backendData.teachersClass12B}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class: 12C</TableCell>
                <TableCell>{backendData.class12C}</TableCell>
                <TableCell>{backendData.teachersClass12C}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <hr className="border-[#999] border my-10" />
          <h1 className=" py-4! text-center font-bold">Attendance</h1>
          <div className="relative">
            <div className="absolute top-2.5 right-2.5 flex gap-4">
              <FontAwesomeIcon
                onClick={() => setAttendanceVisibility(!attendanceVisibility)}
                className={`duration-500 ${
                  attendanceVisibility ? "rotate-90" : "-rotate-90"
                } dashboard-arrow text-[#EEA727]`}
                icon={faArrowRight}
              />
              <FontAwesomeIcon
                onClick={printAttendanceTable}
                icon={faPrint}
                className="cursor-pointer text-[#53629E]"
              />
              <FontAwesomeIcon
                onClick={attendanceTablePDFFunction}
                icon={faFilePdf}
                className="cursor-pointer text-[#DC0000]"
              />
            </div>
            <Table
              id="attendance-table"
              ref={attendanceTableRef}
              component={Paper}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Class</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Absent</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ display: attendanceVisibility ? "" : "none" }}>
                {Object.keys(attendance).map((key) => (
                  <TableRow key={key}>
                    <TableCell>
                      {"Class: " +
                        (key[key.length - 3] === "1"
                          ? key.slice(-3)
                          : key.slice(-3) === "All"
                          ? "All"
                          : key.slice(-2))}
                    </TableCell>
                    <TableCell>
                      {attendance[key as keyof StudentaAttendance].active}
                    </TableCell>
                    <TableCell>
                      {attendance[key as keyof StudentaAttendance].absent}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <hr className="border-[#999] border my-10" />
          <div className="my-10 text-center font-bold">
            Reminder to develop "Upcomming events"
          </div>
          <hr className="border-[#999] border my-10" />
        </div>
        <Paper
          className="fixed left-1/2"
          sx={{ top: succeed ? "10px" : "-100px", transition: "0.5s top ease" }}
        >
          <div className="flex justify-between p-5! gap-2 items-center flex-row">
            <FontAwesomeIcon
              className="bg-lime-500 rounded-[50%] p-1 text-white"
              icon={faCheck}
            />
            <span className="text-lime-500 bg-[#1d1d1d]">Succeed</span>
          </div>
        </Paper>
      </div>
    </>
  );
}
