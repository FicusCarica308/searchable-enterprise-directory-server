import express from 'express';
import mongoose from 'mongoose';
import employeeRouter from './employee-routes.js'
import cors from "cors";

let app = express();
app.use(express.json());
app.use(cors());

// Mongoose connection setup
mongoose.connect('mongodb://localhost:27017/searchable-enterprise-directory-db')
  .catch(error => console.log(error));

// Router setup
app.use('/api/employees', employeeRouter);

app.listen(5555);
