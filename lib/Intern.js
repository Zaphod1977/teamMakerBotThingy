import Employee from "../lib/Employee.js";

function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email; 
    this.school = school;
}

Intern.prototype = Object.create(Employee.prototype);

Intern.prototype.getUsername = function() {
    return this.school
};

Intern.prototype.setUsername = function(school) {
    this.school = school
};

export default Intern;