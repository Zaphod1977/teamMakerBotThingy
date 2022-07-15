var Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('Bobby', 1, 'bob@nunya.com', 'Zaphod1977');

    expect(engineer.name).toBe('Bobby');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('bob@nunya.com');
    expect(engineer.gitUsername).toBe('Zaphod1977');
});