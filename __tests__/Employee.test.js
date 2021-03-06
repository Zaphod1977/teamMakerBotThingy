var Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Bobby', 'manager', 1, 'bob@nunya.com', 'manager');

    expect(employee.name).toBe('Bobby');
    expect(employee.title).toBe('manager');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('bob@nunya.com');
    expect(employee.title).toBe('manager')
});