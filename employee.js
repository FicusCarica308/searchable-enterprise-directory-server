import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const employeeSchema = new Schema({
    NAME: String,
    PHONE: String,
    ROLE: String,
    LOCATION: String,
    SALARY: Number,
    TYPE: String,
    SUPERIORS_ID: String,
    EMAIL: String,
    PASSWORD: String,
  }
);

const Employee = model('Employee', employeeSchema);

export default Employee;
