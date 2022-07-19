const Employee = require ("../lib/Employee.js");

function Engineer(name, title, id, email, gitUsername) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.email = email; 
    this.gitUsername = gitUsername;
}

Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype.getUsername = function() {
    return this.gitUsername
};

Engineer.prototype.setUsername = function(gitUsername) {
    this.gitUsername = gitUsername
};

module.exports = Engineer