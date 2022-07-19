var Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('Bobby', 'manager', 1, 'bob@nunya.com', 'WashU');

    expect(intern.name).toBe('Bobby');
    expect(intern.title).toBe('manager');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('bob@nunya.com');
    expect(intern.school).toBe('WashU');
});