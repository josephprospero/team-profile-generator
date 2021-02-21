const Intern = require('../lib/Intern.js');

test('Create Intern object', () => {
    const intern = new Intern('Ryan', 111, 'ryan@gmail.com', "St. Marque's");

    expect(intern.name).toBe('Ryan');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('ryan@gmail.com')
});

test('Get Intern name', () => {
    const intern = new Intern('Ryan', 111, 'ryan@gmail.com', "St. Marque's");

    expect(intern.getName()).toEqual(expect.any(String));
});

test('Get Intern ID', () => {
    const intern = new Intern('Ryan', 111, 'ryan@gmail.com', "St. Marque's");

    expect(intern.getId()).toEqual(expect.any(Number))
});

test('Get Intern email', () => {
    const intern = new Intern('Ryan', 111, 'ryan@gmail.com', "St. Marque's");

    expect(intern.getEmail()).toEqual(expect.any(String));
});

test('Get Intern School', () => {
    const intern = new Intern('Ryan', 111, 'ryan@gmail.com', "St. Marque's");

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('Get Intern role', () => {
    const intern = new Intern('Ryan', 111, 'ryan@gmail.com', "St. Marque's")

    expect(intern.getRole()).toEqual(expect.any(String));
});