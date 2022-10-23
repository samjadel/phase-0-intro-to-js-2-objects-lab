// Write your solution in this file!
const employee = {
    name: "John", 
    streetAddress: "Winterfell"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newObj = {...employee, "name":"Sam", "streetAddress":"11 Broadway"}
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

// Deleting from employee object by key
function deleteFromEmployeeByKey(employee, key){
    const newObj2 = {...employee[key]};
    delete newObj2[key];
    return newObj2;
}

// Destructively deleting from employee by key
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
