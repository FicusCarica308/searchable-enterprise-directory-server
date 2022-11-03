import express from 'express';
import mongoose from 'mongoose';
import employeeRouter from './employee-routes.js'

let app = express();
app.use(express.json());

// Mongoose connection setup
mongoose.connect('mongodb://localhost:27017/searchable-enterprise-directory-db')
  .catch(error => console.log(error));

// Router setup
app.use('/api/employees', employeeRouter);


// Route for API
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
})

app.listen(5555);
