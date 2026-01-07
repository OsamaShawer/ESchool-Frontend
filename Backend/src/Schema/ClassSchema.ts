import { Document, Schema, model } from "mongoose";

interface ClassInterface extends Document {
  className: string;
  homeroomTeacherName: string;
  studentsCount: number;
  teachersCount: number;
  activeStudentsCount: number;
  absentStudentsCount: number;
  absentStudents: string[];
}

const ClassSchema = new Schema({
  className: { type: String, required: true },
  homeroomTeacherName: { type: String, required: true },
  studentsCount: { type: Number, required: true },
  teachersCount: { type: Number, required: true },
  activeStudentsCount: { type: [Number], required: true },
  absentStudentsCount: { type: [Number], required: true },
  absentStudents: { type: [String], required: true },
});

const ClassModel = model<ClassInterface>("Classes", ClassSchema);

export default ClassModel;
