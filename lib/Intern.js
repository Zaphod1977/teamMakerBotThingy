const Employee = require('../lib/Employee')

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

Intern.prototype.setUsername = function(office) {
    this.school = school
};

module.exports = Intern;