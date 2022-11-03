import express from 'express';
import employeeController from './employee-controller.js'

let employeeRouter = express.Router();

// POST /api/employees -- posts an employee
/**
 * POST /api/employees -- creates an employee in the database
 * Valid Arguments passed in req.body...
 *  > NAME: (String, The name of the employee) Format = (LASTNAME, FIRSTNAME)
 *  > PHONE: (String, The phone number of the employee) Format = (***-***-****)
 *  > ROLE: (String, The working role of the employee) Format = (ANYTHIN (will be regex later))
 *  > LOCATION: (String, The location of the employee) Format = (CITY, STATE)
 *  > SALARY: (Number, The gross income of the employee )
 *  > TYPE: (Sting, The type of employee roll. Can be one of three values 'HR', 'MANAGER', 'EMPLOYEE')
 *  > SUPERIORS_ID: (String, The document ID of the MANAGER employee document that high ranking than the current employee. Will either be mongoDB id or 'N/A')
 *  > EMAIL: (String, The employees work email) Format = (email@domain.com)
 *  > PASSWORD: (String, The employees provided password)
 */
// ARGUMENTS PASSED IN BODY MUST BE lowercase notation Ex. name, email, password NOT NAME, EMAIL, PASSWORD
employeeRouter.post('/', (req, res) => {
  console.log('POST request received');
  employeeController.postEmployee(req, res);
})

// GET /api/employees/user -- Gets a user by credentials (SHOULD NOT RETURN USERNAME OR PASSWORD)
// ARGUMENTS PASSED IN BODY MUST BE lowercase notation Ex. name, email, password NOT NAME, EMAIL, PASSWORD. ONLY PASS IN BODY
employeeRouter.get('/user', (req, res) => {
  console.log('GET request recieved for credentials validation');
  employeeController.getEmployeeUser(req, res);
})

// GET /api/employees -- Gets all users by criteria (needs current usesr id) (RETURNS ALL USERS MINUS SALARY DATA + USERNAME & PASSWORD -
// Will only return salary data for current user or if current user ID matches superors ID)
//   /* ARGUMENTS PASSED MUST BE IN CAPITAL NOTATION EX. NAME, LOCATION not name, location  IN BODY !!!*/

//add air traffic controller

// WILL be given the document id of the user 
employeeRouter.get('/:currentUserDocumentId/:type', (req, res) => {
  console.log('GET request recieved for employees query');
  employeeController.getEmployees(req, res)
})

export default employeeRouter;