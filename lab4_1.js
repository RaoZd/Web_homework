/**
 * Created by rzd on 2016/10/9.
 */
function Employee(name, salary) {
    this.name=name;
    this.salary=salary;
    this.show=function () {
        return this.name+this.salary;
    }
}
function Manager(name,salary,employees) {
    Employee.call(name,salary)
    this.employees=employees;
    this.getInferiors=function () {
        return this.employees;
    }
}

function Secretary(name,salary,boss) {
    Employee.call(name,salary);
    this.boss=boss;
    this.getSuperior=function () {
        return boss;
    }
}