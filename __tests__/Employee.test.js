const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Bobby', 1, 'bob@nunya.com');

    expect(employee.name).toBe('Bobby');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('bob@nunya.com');
});