class Person {
    constructor(id, email, workMood, salary, isManager) {
      this.id = id;
      this.email = email;
      this.workMood = workMood;
      this.salary = salary >= 1000 ? salary : 1000;
      this.isManager = isManager;
      this.healthRate = 100;
      this.money = 0;
    }
  
    sleep(hours) {
      if (hours === 7) {
        this.workMood = 'happy';
      } else if (hours < 7) {
        this.workMood = 'tired';
      } else {
        this.workMood = 'lazy';
      }
    }
  
    eat(meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    }
  
    buy(items) {
      if (items === 1) {
        this.money -= 10;
      }
    }
}
  
class Employee extends Person {
    constructor(id, email, workMood, salary, isManager) {
      super(id, email, workMood, salary, isManager);
    }
  
    work(hours) {
      if (hours === 8) {
        this.workMood = 'happy';
      } else if (hours > 8) {
        this.workMood = 'tired';
      } else {
        this.workMood = 'lazy';
      }
    }
}
  
class Office {
    constructor(name) {
      this.name = name;
      this.employees = [];
    }
  
    getAllEmployees() {
      return this.employees;
    }
  
    getEmployee(empId) {
      const employee = this.employees.find(emp => emp.id === empId);
      if (employee) {
        if (employee.isManager) {
          const { id, email, workMood, isManager, healthRate } = employee;
          return { id, email, workMood, isManager, healthRate };
        } else {
          return employee;
        }
      } else {
        return null;
      }
    }
  
    hire(employee) {
      this.employees.push(employee);
    }
  
    fire(empId) {
      this.employees = this.employees.filter(emp => emp.id !== empId);
    }
  
    addManagerEmployee(id, name, age, salary) {
      const manager = new Employee(id, `${name}@example.com`, 'happy', salary, true);
      this.hire(manager);
    }
  
    addNormalEmployee(id, name, age, salary) {
      const normalEmployee = new Employee(id, `${name}@example.com`, 'happy', salary, false);
      this.hire(normalEmployee);
    }
}
  
const office = new Office('Zeinab Company');

function addEmployee() {
    const id = prompt('Enter Employee ID:');
    const name = prompt('Enter Employee Name:');
    const age = prompt('Enter Employee Age:');
    const salary = prompt('Enter Employee Salary:');
    const isManager = confirm('Is this employee a manager?');
  
    if (isManager) {
      office.addManagerEmployee(id, name, age, salary);
    } else {
      office.addNormalEmployee(id, name, age, salary);
    }

    alert('Employee added successfully!');
}
  
function printAllEmployees() {
    const outputTable = document.getElementById('output');
    const employees = office.getAllEmployees();
    
    outputTable.innerHTML = '';
  
    const headerRow = outputTable.insertRow(0);
    Object.keys(employees[0]).forEach(key => {
      const headerCell = headerRow.insertCell();
      headerCell.textContent = key;
    });
  
    employees.forEach((employee, index) => {
      const row = outputTable.insertRow(index + 1);
      Object.values(employee).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    });
}
  
function printSpecificEmployee() {
    const outputTable = document.getElementById('output');
    const empId = prompt('Enter Employee ID:');
    const employeeInfo = office.getEmployee(empId);
  
    outputTable.innerHTML = '';
  
    if (employeeInfo) {
      const headerRow = outputTable.insertRow(0);
      Object.keys(employeeInfo).forEach(key => {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = key;
      });
  
      const row = outputTable.insertRow(1);
      Object.values(employeeInfo).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    } else {
      const notFoundRow = outputTable.insertRow(0);
      const notFoundCell = notFoundRow.insertCell();
      notFoundCell.textContent = 'Employee not found!';
    }
}
  
function fireEmployee() {
    const empId = prompt('Enter Employee ID to fire:');
    office.fire(empId);
    alert('Employee fired successfully!');
}
  
function quitApplication() {
    alert('Thank you for using the Office Management System. Goodbye!');
}
