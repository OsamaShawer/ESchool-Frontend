import mongoose from "mongoose";

interface TeachersInterface extends mongoose.Document {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  hireDate: Date;
  subjects: string[];
  classesAssigned: { 
    className: string;
    subject: string[];
  }[];
  homeroomTeacher?: string;
  salary: number;
  status: string[];
}



const TeachersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  hireDate: { type: String, required: true },
  subjects: { type: [String], required: true },
  classesAssigned: [{
    className: { type: String, required: true },
    subjects: { type: [String], required: true },
  }],
  salary: { type: Number, required: true },
  active: { type: Number, required: true },
  absent: { type: Number, required: true },
  homeroomTeacher: { type: String, required: false },
  status: { type: [String], require: true },
});


const TeacherModel = mongoose.model<TeachersInterface>(
  "Teachers",
  TeachersSchema
);

export default TeacherModel;

/*
{
  "_id": "ObjectId('6734a92f9b123456789abc02')",
  "firstName": "Sara",
  "lastName": "Nasser",
  "gender": "female",
  "dateOfBirth": "1986-02-12T00:00:00.000Z",
  "email": "sara.nasser@school.edu",
  "phone": "+970599111222",
  "address": "Hebron, Palestine",

  "hireDate": "2020-08-20T00:00:00.000Z",
  "subjects": ["Math", "Physics"],
  "classesAssigned": [
    { "className": "10A", "section": "Science" },
    { "className": "11B", "section": "Math" }
  ],

  "salary": {
    "amount": 3200,
    "currency": "USD",
    "paymentStatus": "paid",
    "lastPaymentDate": "2025-10-25T00:00:00.000Z"
  },

  "attendance": [
    { "date": "2025-11-01", "status": "present" },
    { "date": "2025-11-02", "status": "present" },
    { "date": "2025-11-03", "status": "late" }
  ],

  "performance": {
    "averageStudentScore": 87.5,
    "attendanceRate": 98,
    "remarks": "Very active teacher and great class management."
  },

  "profileImage": "https://school-bucket.s3.amazonaws.com/teachers/sara.jpg",
  "status": "active",

  "createdAt": "2020-08-20T00:00:00.000Z",
  "updatedAt": "2025-10-30T13:41:00.000Z"
}
*/
