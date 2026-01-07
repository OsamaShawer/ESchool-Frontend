import mongoose from "mongoose";

interface GradesInterface {
  subjectName: string;
  firstQuiz?: number;
  mid?: number;
  secondQuiz?: number;
  finalQuiz?: number;
  activity?: number;
  total?: number;
}
interface StudentInteface extends mongoose.Document {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  email?: string;
  phone?: string;
  address?: string;
  guardian: {
    firstName: string;
    lastName: string;
    relation: string;
    email?: string;
    phone?: string;
  };
  className: string;
  grades: GradesInterface[];
  status: string[];
  paid: number;
}

const StudentsSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  address: { type: String, required: false },
  guardian: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    relation: { type: String, required: true },
    phone: { type: String, required: false },
  },
  className: { type: String, required: true },
  grades: [
    {
      subjectName: { type: String, required: true },
      firstQuiz: { type: String, required: false },
      mid: { type: String, required: false },
      secondQuiz: { type: String, required: false },
      finalQuiz: { type: String, required: false },
      activity: { type: String, required: false },
      total: { type: String, required: true },
    },
  ],
  status: { type: [String], require: true },
  paid: { type: Number, required: true, default: 0 }
});

const StudentModel = mongoose.model<StudentInteface>(
  "Students",
  StudentsSchema
);

export default StudentModel;

/*
{
  "_id": "ObjectId('6734a92f9b123456789abc01')",
  "firstName": "Ahmad",
  "lastName": "Khalil",
  "gender": "male",
  "dateOfBirth": "2009-04-15T00:00:00.000Z",
  "email": "ahmad.khalil@student.school.edu",
  "phone": "+970598123456",
  "address": "Ramallah, Palestine",

  "guardian": {
    "name": "Khalil Ahmad",
    "phone": "+970598654321",
    "relation": "father",
    "email": "khalil.parent@email.com"
  },

  "classInfo": {
    "className": "10A",
    "section": "Science",
    "rollNumber": 24,
    "year": 2025
  },

  "grades": [
    { "subject": "Math", "score": 91, "term": "First Term" },
    { "subject": "English", "score": 85, "term": "First Term" },
    { "subject": "Physics", "score": 89, "term": "First Term" }
  ],

  "attendance": [
    { "date": "2025-11-01", "status": "present" },
    { "date": "2025-11-02", "status": "absent" },
    { "date": "2025-11-03", "status": "present" }
  ],

  "profileImage": "https://school-bucket.s3.amazonaws.com/students/ahmad.jpg",
  "enrollmentDate": "2023-09-01T00:00:00.000Z",
  "status": "active", 
  "notes": "Excellent behavior and good academic standing.",

  "createdAt": "2023-09-01T00:00:00.000Z",
  "updatedAt": "2025-10-30T14:22:00.000Z"
}

*/
