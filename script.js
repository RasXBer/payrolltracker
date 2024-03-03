// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray = [];


// Collect employee data
const collectEmployees = function () {
  var firstName = prompt("First Name");
  var lastName = prompt("Last Name");
  var salary = prompt("Salary");

  if (firstName === null) {
    console.log("Enter a name");

  } else {
    console.log(collectEmployees);
  }
  // let addEmployeesBtn = true;
  employeesArray.push({ firstName: firstName, lastName: lastName, salary: salary })
  var employee = 1
  var text = "";

  while (employee < 10) {
    `${employee} \n`;
    employee++;
  }
  console.log(text);
  if (confirm("would you like to add more")) {
    collectEmployees();
  } else {
    displayEmployees(employeesArray);
    displayAverageSalary(employeesArray);
    getRandomEmployee(employeesArray);
  }

  // TODO: Get user input to create and return an array of employee objects- Done
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  var total = 0

  for (let i = 0; i < employeesArray.length; i++) {
    total += parseFloat(employeesArray[i].salary)
  }
  let average = total / employeesArray.length;
  console.log(average);

  // TODO: Calculate and display the average salary - Done
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {

  console.log(employeesArray[Math.floor(Math.random() * employeesArray.length)])
  // TODO: Select and display a random employee - Done
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', collectEmployees);
