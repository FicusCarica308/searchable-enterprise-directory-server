import Employee from './employee.js'
import employeeCleaner from './employee-cleaner.js'
// IMPORT CLEANER --- TO DO

const employeeController = {
  // POST's and employee to the Database
  postEmployee(req, res) {
    console.log(req.body);
    const newEmployee = new Employee ({
      NAME: req.body.name,
      PHONE: req.body.phone,
      ROLE: req.body.role,
      LOCATION: req.body.location,
      SALARY: req.body.salary,
      TYPE: req.body.type,
      SUPERIORS_ID: req.body.superiors_id,
      EMAIL: req.body.email,
      PASSWORD: req.body.password,
    });

    newEmployee.save()
    .then(() => {
      console.log('new Employee has been saved as :', newEmployee);
      res.send(201);
    })
    .catch((error) => {
      console.error('Error saving new employee !', error);
      res.send(500);
    })
  },

  // Gets a single employee (either by crednetials or Document ID)
  /* Can take USERNAME & PASSWORD schema fields or _id: ObjectId('') */
  getEmployeeUser(req, res) {
    Employee.findOne({EMAIL: req.body.email, PASSWORD: req.body.password}, (err, employee) => {
      if (err || !employee ){
          res.status(404).send('Employee not found !');
      } else {
        res.send(employeeCleaner.removeCredentials(employee));
      }
  });
  },



  // Gets a single employee (either by crednetials or Document ID)
  /* Can take USERNAME & PASSWORD schema fields or _id: ObjectId('') */
  /* ARGUMENTS PASSED MUST BE IN CAPITAL NOTATION EX. NAME, LOCATION not name, location*/
  // TODO make sure that arguments passed into req.body are valid
  getEmployees(req, res) {
    Employee.find({...req.body}, (err, employees) => {
      if (err){
          res.status(404).send('Employee not found !');
      } else {
          res.send(employeeCleaner.cleanForDisplay(employees, req.params.currentUserDocumentId, req.params.type));
      }
  });
  },


}

export default employeeController;