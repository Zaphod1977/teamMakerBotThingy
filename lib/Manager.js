const Employee = require ("../lib/Employee.js");

function Manager(name, title, id, email, office) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.email = email; 
    this.office = office;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getUsername = function() {
    return this.office
};

Manager.prototype.setUsername = function(office) {
    this.office = office
};

module.exports = Manager