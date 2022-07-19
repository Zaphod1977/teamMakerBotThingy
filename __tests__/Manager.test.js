var Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Bobby', 'manager', 1, 'bob@nunya.com', '42');

    expect(manager.name).toBe('Bobby');
    expect(manager.title).toBe('manager');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('bob@nunya.com');
    expect(manager.office).toBe('42');
});