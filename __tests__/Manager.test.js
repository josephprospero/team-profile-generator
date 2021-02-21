const Manager = require('../lib/Manager.js');

test('Create Manager Object', () => {
    const manager = new Manager('Julius', 111, 'julius@gmail.com');

    expect(manager.name).toBe('Julius');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('julius@gmail.com')
});

test('Get manager name', () => {
    const manager = new Manager('Julius', 111, 'julius@gmail.com');

    expect(manager.getName()).toEqual(expect.any(String));
});

test('Get manager ID', () => {
    const manager = new Manager('Julius', 111, 'julius@gmail.com');

    expect(manager.getId()).toEqual(expect.any(Number))
});

test('Get manager email', () => {
    const manager = new Manager('Julius', 111, 'julius@gmail.com');

    expect(manager.getEmail()).toEqual(expect.any(String));
});

test('Get manager role', () => {
    const manager = new Manager('Julius', 111, 'julius@gmail.com')

    expect(manager.getRole()).toEqual(expect.any(String));
});
