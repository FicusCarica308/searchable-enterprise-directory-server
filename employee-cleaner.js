// WHEN CLEANRING DATA IT NEEDS TO REMOVE USERNAMSE AND PASSWORDS  - ALSO NEEDS TO REMOVE SALARYS

// MAKE SURE TO RMOEVE OBJECT id's too and who they report to
import Employee from './employee.js'


const employeeCleaner = {
  removeCredentials(employee) {
    return {
      id: employee.id,
      name: employee.NAME,
      phone: employee.PHONE,
      role:  employee.ROLE,
      location: employee.LOCATION,
      salary: employee.SALARY,
      type: employee.TYPE,
      superiors_id: employee.SUPERIORS_ID
    }
  },

  cleanForDisplay(employees, currentUserDocumentId, type) {
    let returnData = [];
    let modifiedEmployee;
    console.log(currentUserDocumentId, type);
    for (const employee in employees) {
      modifiedEmployee = employeeCleaner.removeCredentials(employees[employee]);
      if (modifiedEmployee.id != currentUserDocumentId && modifiedEmployee.superiors_id != currentUserDocumentId && type !== 'HR') {
        delete modifiedEmployee.salary;
      }
      returnData.push(modifiedEmployee);
    }
    return returnData;
  }
}

export default employeeCleaner;
