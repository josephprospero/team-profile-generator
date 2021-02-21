const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('Create Manager Object', () => {
    const manager = new Manager('Julius', 111, 'julius@gmail.com');

    expect(manager.name).toBe('Julius');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('julius@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Get Manager name', () => {
    const manager = new Manager('Julius', 111, 'julius@gmail.com');

    expect(manager.getName()).toEqual(expect.any(String));
});

test('Get Manager ID', () => {
    const manager = new Manager('Julius', 111, 'julius@gmail.com');

    expect(manager.getId()).toEqual(expect.any(Number))
});

test('Get Manager email', () => {
    const manager = new Manager('Julius', 111, 'julius@gmail.com');

    expect(manager.getEmail()).toEqual(expect.any(String));
});

test('Get Manager role', () => {
    const manager = new Manager('Julius', 111, 'julius@gmail.com')

    expect(manager.getRole()).toEqual(expect.any(String));
});
