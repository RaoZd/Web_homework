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
var employees=[];
var boss=new String();
function Manager() {
}
Manager.prototype=new Employee();
Manager.prototype.employees=employees;
Manager.prototype.getInferiors=function () {
    return this.employees;
}

function Secretary() {
}
Secretary.prototype=new Employee();
Secretary.prototype.boss=boss;
Secretary.prototype.getSuperior=function () {
    return this.boss;
}