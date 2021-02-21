const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Create Employee Object', () => {
    const employee = new Employee('Zak', 111, 'zak@gmail.com');

    expect(employee.name).toBe('Zak');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('zak@gmail.com')
});

test('Get employee name', () => {
    const employee = new Employee('Zak', 111, 'zak@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Get Employee ID', () => {
    const employee = new Employee('Zak', 111, 'zak@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number))
});

test('Get Employee email', () => {
    const employee = new Employee('Zak', 111, 'zak@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('Get Employee role', () => {
    const employee = new Employee('Zak', 111, 'zak@gmail.com')

    expect(employee.getRole()).toEqual(expect.any(String));
});