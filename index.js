// Write your solution in this file!

const employee = {
  name: "Lebron James",

  streetAddress: "4344 Malibu lane",
};

function updateEmployeeWithKeyAndValue(newEmployee, key, value) {
  const copyOfEmployee = { ...newEmployee };

  copyOfEmployee[key] = value;

  return copyOfEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value) {
  newEmployee[key] = value;

  return newEmployee;
}

function deleteFromEmployeeByKey(newEmployee, key) {
  const copyOfEmployee = { ...newEmployee };

  delete copyOfEmployee[key];

  return copyOfEmployee;
}

function destructivelyDeleteFromEmployeeByKey(newEmployee, key) {
  delete newEmployee[key];

  return newEmployee;
}

//Shallow copy is pointing to original
//Deep copy is it's own thing - "New array created"
