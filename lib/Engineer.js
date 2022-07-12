const Employee = require('../lib/Employee')

function Engineer(name, id, email, gitUsername) {
    this.name = name;
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

module.exports = Engineer;