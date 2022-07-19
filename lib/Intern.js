const Employee = require ("../lib/Employee.js");

function Intern(name, title, id, email, school) {
    this.name = name;
    this.title = title;
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

module.exports = Intern;