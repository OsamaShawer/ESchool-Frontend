import { Document, Schema, model } from "mongoose";
interface ManagerInter extends Document {
  fullName: string;
  identityNumber: string;
  email: string;
  password: string;
  rule: string;
}

const ManagerSchema = new Schema({
  fullName: { type: String, required: true },
  identityNumber: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rule: { type: String, required: true }
});

const ManagerModel = model<ManagerInter>("Managers", ManagerSchema);

export default ManagerModel;