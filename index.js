// Write your solution in this file!

const employee = {
  name: "Lebron James",
  streetAddress: "Malibu st",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newEmployee = { ...employee };

  newEmployee[key] = value;

  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee2 = { ...employee };

  delete newEmployee2[key];

  return newEmployee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
}
