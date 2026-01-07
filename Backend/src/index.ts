// | ----------  Start Imprting Modules For Backend  ---------- |
import express, { NextFunction, Request, Response } from "express";
import { connect } from "mongoose";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import ManagerModel from "./Schema/ManagerSchema";
import JWT from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";
import StudentModel from "./Schema/StudentSchema";
import TeacherModel from "./Schema/TeacherSchema";
import ClassModel from "./Schema/ClassSchema";
// | ----------  End Imprting Modules For Backend  ---------- |

// | ----------  Start Constants And Express() Uses ---------- |
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

const JWT_SECRET = "meaw123";
// | ----------  End Constants And Express() Uses ---------- |

// | ----------  Start Connecting To Mongoose ---------- |
connect("mongodb://localhost:27017/MySchool")
  .then(() => console.log("Connected To MongoDB Successfully"))
  .catch((err) => console.log(`Error From MongoDB: "${err}"`));
// D2-Y9r5CR3w
// | ----------  End Connecting To Mongoose ---------- |

interface AuthRequest extends Request {
  user?: any;
}
// | ----------  Start Protecting Route ---------- |
function protectRoute(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const authHeader = req.cookies.token;
    if (!authHeader) return res.status(401).json({ message: "Unauthorized" });
    const token = authHeader?.split(" ")[0];
    if (!token) return res.status(403).json({ message: "Token Missed" });
    JWT.verify(token, JWT_SECRET, (error: any, data: any) => {
      if (error)
        return res.status(401).json({ messgae: "Something went wrong" });
      req.user = data;
      next();
    });
  } catch (error) {
    res.status(500).json({ message: "Server Has Destroyed" });
    console.error(`Error Came From Protecting: ${error}`);
  }
}
// | ----------  End Protecting Route ---------- |

async function a() {}

// | ----------  Start Singing In Route ---------- |
app.post("/", async (req, res) => {
  try {
    const { identityNumber, password } = req.body;
    const user = await ManagerModel.findOne({ identityNumber: identityNumber });
    console.log(user);
    if (user && password === user.password && user.rule === "Manager") {
      console.log("That Is An Admin");
      const jwtTolen = JWT.sign(
        { id: user._id, identityNumber: user.identityNumber },
        JWT_SECRET,
        { expiresIn: "1hr" }
      );
      res.cookie("token", jwtTolen, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60, // 1 Hour
      });
      res.status(200).json({ message: "That Is An Admin" });
    } else if (user && user.password === password) {
    } else return res.status(401).json({ message: "Unauthorized" });
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ message: "Get Out" });
  }
});
// | ----------  End Singing In Route ---------- |

// | ----------  Start Class Count Interface ---------- |
interface ClassStudentsCountsInterface {
  class5A: number;
  class5B: number;
  class5C: number;
  class6A: number;
  class6B: number;
  class6C: number;
  class7A: number;
  class7B: number;
  class7C: number;
  class8A: number;
  class8B: number;
  class8C: number;
  class9A: number;
  class9B: number;
  class9C: number;
  class10A: number;
  class10B: number;
  class10C: number;
  class11A: number;
  class11B: number;
  class11C: number;
  class12A: number;
  class12B: number;
  class12C: number;
}
// | ----------  End Class Students Count Interface ---------- |

// | ----------  Start Class Teachers Count Interface ---------- |
interface ClassTeachersCount {
  teachersClass5A: number;
  teachersClass5B: number;
  teachersClass5C: number;
  teachersClass6A: number;
  teachersClass6B: number;
  teachersClass6C: number;
  teachersClass7A: number;
  teachersClass7B: number;
  teachersClass7C: number;
  teachersClass8A: number;
  teachersClass8B: number;
  teachersClass8C: number;
  teachersClass9A: number;
  teachersClass9B: number;
  teachersClass9C: number;
  teachersClass10A: number;
  teachersClass10B: number;
  teachersClass10C: number;
  teachersClass11A: number;
  teachersClass11B: number;
  teachersClass11C: number;
  teachersClass12A: number;
  teachersClass12B: number;
  teachersClass12C: number;
}


// | ----------  Start Class Students Count Function ---------- |
async function classStudentsCountHolderFunction() {
  const class5A = await StudentModel.countDocuments({ className: "5A" });
  const class5B = await StudentModel.countDocuments({ className: "5B" });
  const class5C = await StudentModel.countDocuments({ className: "5C" });
  const class6A = await StudentModel.countDocuments({ className: "6A" });
  const class6B = await StudentModel.countDocuments({ className: "6B" });
  const class6C = await StudentModel.countDocuments({ className: "6C" });
  const class7A = await StudentModel.countDocuments({ className: "7A" });
  const class7B = await StudentModel.countDocuments({ className: "7B" });
  const class7C = await StudentModel.countDocuments({ className: "7C" });
  const class8A = await StudentModel.countDocuments({ className: "8A" });
  const class8B = await StudentModel.countDocuments({ className: "8B" });
  const class8C = await StudentModel.countDocuments({ className: "8C" });
  const class9A = await StudentModel.countDocuments({ className: "9A" });
  const class9B = await StudentModel.countDocuments({ className: "9B" });
  const class9C = await StudentModel.countDocuments({ className: "9C" });
  const class10A = await StudentModel.countDocuments({ className: "10A" });
  const class10B = await StudentModel.countDocuments({ className: "10B" });
  const class10C = await StudentModel.countDocuments({ className: "10C" });
  const class11A = await StudentModel.countDocuments({ className: "11A" });
  const class11B = await StudentModel.countDocuments({ className: "11B" });
  const class11C = await StudentModel.countDocuments({ className: "11C" });
  const class12A = await StudentModel.countDocuments({ className: "12A" });
  const class12B = await StudentModel.countDocuments({ className: "12B" });
  const class12C = await StudentModel.countDocuments({ className: "12C" });
  const classStudeentsCount: ClassStudentsCountsInterface = {
    class5A: class5A,
    class5B: class5B,
    class5C: class5C,
    class6A: class6A,
    class6B: class6B,
    class6C: class6C,
    class7A: class7A,
    class7B: class7B,
    class7C: class7C,
    class8A: class8A,
    class8B: class8B,
    class8C: class8C,
    class9A: class9A,
    class9B: class9B,
    class9C: class9C,
    class10A: class10A,
    class10B: class10B,
    class10C: class10C,
    class11A: class11A,
    class11B: class11B,
    class11C: class11C,
    class12A: class12A,
    class12B: class12B,
    class12C: class12C,
  };
  return classStudeentsCount;
}

// | ----------  End Class Students Count Function ---------- |

// | ----------  Start Class Teachers Count Function ---------- |
async function classTeachersCountHolderFunction() {
  const class5A = await TeacherModel.countDocuments({
    "classesAssigned.className": "5A",
  });
  const class5B = await TeacherModel.countDocuments({
    "classesAssigned.className": "5B",
  });
  const class5C = await TeacherModel.countDocuments({
    "classesAssigned.className": "5C",
  });
  const class6A = await TeacherModel.countDocuments({
    "classesAssigned.className": "6A",
  });
  const class6B = await TeacherModel.countDocuments({
    "classesAssigned.className": "6B",
  });
  const class6C = await TeacherModel.countDocuments({
    "classesAssigned.className": "6C",
  });
  const class7A = await TeacherModel.countDocuments({
    "classesAssigned.className": "7A",
  });
  const class7B = await TeacherModel.countDocuments({
    "classesAssigned.className": "7B",
  });
  const class7C = await TeacherModel.countDocuments({
    "classesAssigned.className": "7C",
  });
  const class8A = await TeacherModel.countDocuments({
    "classesAssigned.className": "8A",
  });
  const class8B = await TeacherModel.countDocuments({
    "classesAssigned.className": "8B",
  });
  const class8C = await TeacherModel.countDocuments({
    "classesAssigned.className": "8C",
  });
  const class9A = await TeacherModel.countDocuments({
    "classesAssigned.className": "9A",
  });
  const class9B = await TeacherModel.countDocuments({
    "classesAssigned.className": "9B",
  });
  const class9C = await TeacherModel.countDocuments({
    "classesAssigned.className": "9C",
  });
  const class10A = await TeacherModel.countDocuments({
    "classesAssigned.className": "10A",
  });
  const class10B = await TeacherModel.countDocuments({
    "classesAssigned.className": "10B",
  });
  const class10C = await TeacherModel.countDocuments({
    "classesAssigned.className": "10C",
  });
  const class11A = await TeacherModel.countDocuments({
    "classesAssigned.className": "11A",
  });
  const class11B = await TeacherModel.countDocuments({
    "classesAssigned.className": "11B",
  });
  const class11C = await TeacherModel.countDocuments({
    "classesAssigned.className": "11C",
  });
  const class12A = await TeacherModel.countDocuments({
    "classesAssigned.className": "12A",
  });
  const class12B = await TeacherModel.countDocuments({
    "classesAssigned.className": "12B",
  });
  const class12C = await TeacherModel.countDocuments({
    "classesAssigned.className": "12C",
  });
  const classStudeentsCount: ClassTeachersCount = {
    teachersClass5A: class5A,
    teachersClass5B: class5B,
    teachersClass5C: class5C,
    teachersClass6A: class6A,
    teachersClass6B: class6B,
    teachersClass6C: class6C,
    teachersClass7A: class7A,
    teachersClass7B: class7B,
    teachersClass7C: class7C,
    teachersClass8A: class8A,
    teachersClass8B: class8B,
    teachersClass8C: class8C,
    teachersClass9A: class9A,
    teachersClass9B: class9B,
    teachersClass9C: class9C,
    teachersClass10A: class10A,
    teachersClass10B: class10B,
    teachersClass10C: class10C,
    teachersClass11A: class11A,
    teachersClass11B: class11B,
    teachersClass11C: class11C,
    teachersClass12A: class12A,
    teachersClass12B: class12B,
    teachersClass12C: class12C,
  };
  return classStudeentsCount;
}
// | ----------  End Class Teachers Count Function ---------- |

// | ----------  Start Class Students Attendance Interface ---------- |
interface StudentaAttendance {
  class5A: {
    active: number;
    absent: number;
  };
  class5B: {
    active: number;
    absent: number;
  };
  class5C: {
    active: number;
    absent: number;
  };
  class6A: {
    active: number;
    absent: number;
  };
  class6B: {
    active: number;
    absent: number;
  };
  class6C: {
    active: number;
    absent: number;
  };
  class7A: {
    active: number;
    absent: number;
  };
  class7B: {
    active: number;
    absent: number;
  };
  class7C: {
    active: number;
    absent: number;
  };
  class8A: {
    active: number;
    absent: number;
  };
  class8B: {
    active: number;
    absent: number;
  };
  class8C: {
    active: number;
    absent: number;
  };
  class9A: {
    active: number;
    absent: number;
  };
  class9B: {
    active: number;
    absent: number;
  };
  class9C: {
    active: number;
    absent: number;
  };
  class10A: {
    active: number;
    absent: number;
  };
  class10B: {
    active: number;
    absent: number;
  };
  class10C: {
    active: number;
    absent: number;
  };
  class11A: {
    active: number;
    absent: number;
  };
  class11B: {
    active: number;
    absent: number;
  };
  class11C: {
    active: number;
    absent: number;
  };
  class12A: {
    active: number;
    absent: number;
  };
  class12B: {
    active: number;
    absent: number;
  };
  class12C: {
    active: number;
    absent: number;
  };
  countAll: {
    active: number;
    absent: number;
  };
}

// | ----------  End Class Students Attendance Interface ---------- |

// | ----------  Start Class Students Attendance Function ---------- |

async function getAttendanceStudents() {
  const studentsAttendanceActive5A = await StudentModel.find({
    className: "5A",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive5B = await StudentModel.find({
    className: "5B",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive5C = await StudentModel.find({
    className: "5C",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive6A = await StudentModel.find({
    className: "6A",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive6B = await StudentModel.find({
    className: "6B",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive6C = await StudentModel.find({
    className: "6C",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive7A = await StudentModel.find({
    className: "7A",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive7B = await StudentModel.find({
    className: "7B",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive7C = await StudentModel.find({
    className: "7C",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive8A = await StudentModel.find({
    className: "8A",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive8B = await StudentModel.find({
    className: "8B",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive8C = await StudentModel.find({
    className: "8C",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive9A = await StudentModel.find({
    className: "9A",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive9B = await StudentModel.find({
    className: "9B",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive9C = await StudentModel.find({
    className: "9C",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive10A = await StudentModel.find({
    className: "10A",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive10B = await StudentModel.find({
    className: "10B",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive10C = await StudentModel.find({
    className: "10C",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive11A = await StudentModel.find({
    className: "11A",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive11B = await StudentModel.find({
    className: "11B",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive11C = await StudentModel.find({
    className: "11C",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive12A = await StudentModel.find({
    className: "12A",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive12B = await StudentModel.find({
    className: "12B",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });
  const studentsAttendanceActive12C = await StudentModel.find({
    className: "12C",
    $expr: {
      $eq: [{ $arrayElemAt: ["$status", -1] }, "active"],
    },
  });

  const studentsCount = await classStudentsCountHolderFunction();
  const students5AAbsent =
    studentsCount.class5A - studentsAttendanceActive5A.length;
  const students5BAbsent =
    studentsCount.class5B - studentsAttendanceActive5B.length;
  const students5CAbsent =
    studentsCount.class5C - studentsAttendanceActive5C.length;
  const students6AAbsent =
    studentsCount.class6A - studentsAttendanceActive6A.length;
  const students6BAbsent =
    studentsCount.class6B - studentsAttendanceActive6B.length;
  const students6CAbsent =
    studentsCount.class6C - studentsAttendanceActive6C.length;
  const students7AAbsent =
    studentsCount.class7A - studentsAttendanceActive7A.length;
  const students7BAbsent =
    studentsCount.class7B - studentsAttendanceActive7B.length;
  const students7CAbsent =
    studentsCount.class7C - studentsAttendanceActive7C.length;
  const students8AAbsent =
    studentsCount.class8A - studentsAttendanceActive8A.length;
  const students8BAbsent =
    studentsCount.class8B - studentsAttendanceActive8B.length;
  const students8CAbsent =
    studentsCount.class8C - studentsAttendanceActive8C.length;
  const students9AAbsent =
    studentsCount.class9A - studentsAttendanceActive9A.length;
  const students9BAbsent =
    studentsCount.class9B - studentsAttendanceActive9B.length;
  const students9CAbsent =
    studentsCount.class9C - studentsAttendanceActive9C.length;
  const students10AAbsent =
    studentsCount.class10A - studentsAttendanceActive10A.length;
  const students10BAbsent =
    studentsCount.class10B - studentsAttendanceActive10B.length;
  const students10CAbsent =
    studentsCount.class10C - studentsAttendanceActive10C.length;
  const students11AAbsent =
    studentsCount.class11A - studentsAttendanceActive11A.length;
  const students11BAbsent =
    studentsCount.class11B - studentsAttendanceActive11B.length;
  const students11CAbsent =
    studentsCount.class11C - studentsAttendanceActive11C.length;
  const students12AAbsent =
    studentsCount.class12A - studentsAttendanceActive12A.length;
  const students12BAbsent =
    studentsCount.class12B - studentsAttendanceActive12B.length;
  const students12CAbsent =
    studentsCount.class12C - studentsAttendanceActive12C.length;
  const actives = [
    studentsAttendanceActive5A.length,
    studentsAttendanceActive5B.length,
    studentsAttendanceActive5C.length,
    studentsAttendanceActive6A.length,
    studentsAttendanceActive6B.length,
    studentsAttendanceActive6C.length,
    studentsAttendanceActive7A.length,
    studentsAttendanceActive7B.length,
    studentsAttendanceActive7C.length,
    studentsAttendanceActive8A.length,
    studentsAttendanceActive8B.length,
    studentsAttendanceActive8C.length,
    studentsAttendanceActive9A.length,
    studentsAttendanceActive9B.length,
    studentsAttendanceActive9C.length,
    studentsAttendanceActive10A.length,
    studentsAttendanceActive10B.length,
    studentsAttendanceActive10C.length,
    studentsAttendanceActive11A.length,
    studentsAttendanceActive11B.length,
    studentsAttendanceActive11C.length,
    studentsAttendanceActive12A.length,
    studentsAttendanceActive12B.length,
    studentsAttendanceActive12C.length,
  ];
  let activeCount: number = 0;
  actives.forEach((element) => {
    activeCount += element;
  });
  let studentsNumbers = await StudentModel.countDocuments();
  const absents = studentsNumbers - activeCount;
  const studentsAttendace: StudentaAttendance = {
    class5A: {
      active: studentsAttendanceActive5A.length,
      absent: students5AAbsent,
    },
    class5B: {
      active: studentsAttendanceActive5B.length,
      absent: students5BAbsent,
    },
    class5C: {
      active: studentsAttendanceActive5C.length,
      absent: students5CAbsent,
    },
    class6A: {
      active: studentsAttendanceActive6A.length,
      absent: students6AAbsent,
    },
    class6B: {
      active: studentsAttendanceActive6B.length,
      absent: students6BAbsent,
    },
    class6C: {
      active: studentsAttendanceActive6C.length,
      absent: students6CAbsent,
    },
    class7A: {
      active: studentsAttendanceActive7A.length,
      absent: students7AAbsent,
    },
    class7B: {
      active: studentsAttendanceActive7B.length,
      absent: students7BAbsent,
    },
    class7C: {
      active: studentsAttendanceActive7C.length,
      absent: students7CAbsent,
    },
    class8A: {
      active: studentsAttendanceActive8A.length,
      absent: students8AAbsent,
    },
    class8B: {
      active: studentsAttendanceActive8B.length,
      absent: students8BAbsent,
    },
    class8C: {
      active: studentsAttendanceActive8C.length,
      absent: students8CAbsent,
    },
    class9A: {
      active: studentsAttendanceActive9A.length,
      absent: students9AAbsent,
    },
    class9B: {
      active: studentsAttendanceActive9B.length,
      absent: students9BAbsent,
    },
    class9C: {
      active: studentsAttendanceActive9C.length,
      absent: students9CAbsent,
    },
    class10A: {
      active: studentsAttendanceActive10A.length,
      absent: students10AAbsent,
    },
    class10B: {
      active: studentsAttendanceActive10B.length,
      absent: students10BAbsent,
    },
    class10C: {
      active: studentsAttendanceActive10C.length,
      absent: students10CAbsent,
    },
    class11A: {
      active: studentsAttendanceActive11A.length,
      absent: students11AAbsent,
    },
    class11B: {
      active: studentsAttendanceActive11B.length,
      absent: students11BAbsent,
    },
    class11C: {
      active: studentsAttendanceActive11C.length,
      absent: students11CAbsent,
    },
    class12A: {
      active: studentsAttendanceActive12A.length,
      absent: students12AAbsent,
    },
    class12B: {
      active: studentsAttendanceActive12B.length,
      absent: students12BAbsent,
    },
    class12C: {
      active: studentsAttendanceActive12C.length,
      absent: students12CAbsent,
    },
    countAll: {
      active: activeCount,
      absent: absents,
    },
  };
  return studentsAttendace;
}

// | ----------  End Class Students Attendance Function ---------- |

// | ----------  Start Sending Data To Overview Component Route ---------- |

app.get("/total", protectRoute, async (req, res) => {
  const studentsTotal = await StudentModel.countDocuments();
  const teacherTotal = await TeacherModel.countDocuments();
  const studentsCount = await classStudentsCountHolderFunction();
  const teachersCount = await classTeachersCountHolderFunction();
  const studentsAttendance = await getAttendanceStudents();

  res.status(200).json({
    totalStudents: studentsTotal,
    totalTeachers: teacherTotal,
    classStudeentsCountObject: studentsCount,
    classTeachersCountObject: teachersCount,
    teachersCount: teachersCount,
    studentsAttendance: studentsAttendance,
  });
});

// | ---------- End Sending Data To Overview Component Route ---------- |

// | ---------- Start Sending Data To Students Management Component Route ---------- |

app.get("/students-management", protectRoute, async (_, res) => {
  res.status(200).json({ message: "hello" });
});
// | ---------- End Sending Data To Students Management Component Route ---------- |
/*
🧭 1. Main Dashboard Overview
🧠 Purpose:

Give the manager a clear overview of the school’s key statistics.
📋 Features:

Total Students / Teachers / Classes ( Enabled )

Active Students vs Graduates ( Disabled ) 

Attendance Summary (today / month) ( Enabled ) 

Finance Summary (total income, unpaid fees) ( Comming )

Upcoming Events / Exams / Birthdays ( Comming )

Quick Access Buttons (Add Student, Add Teacher, etc.)

⚙️ Implementation:

Create a React page /dashboard

Use MUI Grid and Card components for stats

Use Recharts (Bar, Line, Pie) for analytics

Fetch summary data from /api/dashboard/summary

👨‍🎓 2. Student Management
🧠 Purpose:

Manage student information, enrollment, performance, and attendance.

📋 Features:

- Add / Edit / Delete students

- Search / Filter by name, class, status

- View full student profile (grades, attendance, guardian info)

- Import/export students (Excel/CSV)

- Generate student reports (PDF)

- Assign students to classes

- View academic performance analytics

⚙️ Implementation Plan:

Backend: /api/students (CRUD endpoints)

Frontend:

Page: /students

Components:

StudentTable.tsx

StudentFormDialog.tsx

StudentProfile.tsx

State: useState or global store for student list

👨‍🏫 3. Teacher Management
🧠 Purpose:

Manage teachers, classes assigned, and salary information.

📋 Features:

Add / Edit / Remove teachers

Assign teachers to classes and subjects

View teacher attendance

Manage salaries and payments

View teacher performance analytics

Upload documents (certificates, CVs)

Send internal messages

⚙️ Implementation Plan:

Backend: /api/teachers

Frontend:

Page: /teachers

Components:

TeacherTable.tsx

TeacherFormDialog.tsx

TeacherProfile.tsx

📚 4. Class & Subject Management
🧠 Purpose:

Structure the academic system: which classes exist and what subjects are taught.

📋 Features:

Create / Edit / Delete classes

Assign subjects to classes

Assign teachers to subjects

View students per class

Schedule management (timetable)

Class performance summary

⚙️ Implementation Plan:

Backend: /api/classes

Frontend:

Page: /classes

Components:

ClassList.tsx

ClassEditor.tsx

ClassPerformanceChart.tsx

🧮 5. Exams & Grades Management
🧠 Purpose:

Organize exams, store grades, and generate reports.

📋 Features:

Add exams (name, date, subject)

Enter/edit grades for students

View exam performance analytics

Export report cards (PDF)

Send results to parents

Compare performance between terms

⚙️ Implementation Plan:

Backend: /api/exams and /api/grades

Frontend:

Page: /exams

Components:

ExamList.tsx

GradeEntryForm.tsx

PerformanceChart.tsx

🕓 6. Attendance Management
🧠 Purpose:

Track attendance of students and teachers.

📋 Features:

Daily attendance marking

View attendance by date/class

Filter by “absent” / “late” / “present”

Attendance reports (PDF / chart)

Automatic absent notifications

⚙️ Implementation Plan:

Backend: /api/attendance

Frontend:

Page: /attendance

Components:

AttendanceTable.tsx

AttendanceCalendar.tsx

💰 7. Finance Management
🧠 Purpose:

Manage school income, student payments, and staff salaries.

📋 Features:

Student fees tracking (paid/unpaid)

Add/edit/delete payment records

Salary tracking for teachers

Generate monthly financial reports

Visualize income/expenses

Send payment reminders

⚙️ Implementation Plan:

Backend: /api/finance

Frontend:

Page: /finance

Components:

FeeTable.tsx

SalaryTable.tsx

FinanceSummaryChart.tsx

📆 8. Events & Calendar
🧠 Purpose:

Plan and display all school events in one place.

📋 Features:

Add / Edit / Delete events

Mark event type (exam, meeting, holiday)

Show on shared calendar

Notifications for upcoming events

⚙️ Implementation Plan:

Backend: /api/events

Frontend:

Page: /events

Components:

CalendarView.tsx (FullCalendar)

EventFormDialog.tsx

📨 9. Communication & Notifications
🧠 Purpose:

Simplify communication between manager, teachers, and parents.

📋 Features:

Send announcements or private messages

View incoming messages

Email or in-app notifications

Chat with teachers/staff (optional)

⚙️ Implementation Plan:

Backend: /api/messages

Frontend:

Page: /messages

Components:

MessageList.tsx

NewMessageForm.tsx

👤 10. Admin & System Settings
🧠 Purpose:

Handle roles, permissions, and app configuration.

📋 Features:

Manage admin accounts (add/remove)

Role-based access control (admin, teacher, student)

Change school logo, name, theme

Backup/restore database

Dark mode toggle

⚙️ Implementation Plan:

Backend: /api/settings

Frontend:

Page: /settings

Components:

SettingsForm.tsx

UserRolesTable.tsx

📈 11. Analytics & Reports
🧠 Purpose:

Help the manager analyze data to improve decisions.

📋 Features:

Student performance trends

Attendance charts

Finance graphs (monthly income)

Teacher performance metrics

Export all reports as PDF/CSV

⚙️ Implementation Plan:

Backend: /api/analytics

Frontend:

Page: /analytics

Components:

PerformanceCharts.tsx

AnalyticsSummaryCards.tsx
*/

app.get("/manager's-dashboard", protectRoute, async (req, res) => {
  res.status(200).json({ message: "Hayyak Allah" });
});

app.listen(PORT, () => console.log("Working On Port " + PORT + "..."));
