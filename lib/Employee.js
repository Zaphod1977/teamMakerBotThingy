function Employee(name, title, id, email) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.email = email; 
};

Employee.prototype.getName = function() {
    return this.name;
};

Employee.prototype.getTitle = function() {
    return this.title;
};

Employee.prototype.getId = function() {
    return this.id;
};

Employee.prototype.getEmail = function() {
    return this.email;
};

Employee.prototype.setName = function(name) {
    this.name = name;
};

Employee.prototype.setTitle = function(title) {
    this.title = title;
};

Employee.prototype.setId = function(id) {
    this.id = id;
};

Employee.prototype.setEmail = function(email) {
    this.email = email;
};

module.exports = Employee