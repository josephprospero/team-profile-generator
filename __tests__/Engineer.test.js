const Engineer = require('../lib/Engineer.js')

test('Create Engineer object', () => {
    const engineer = new Engineer('Resty', 111, 'resty@gmail.com', 'resty123');

    expect(engineer.name).toBe('Resty');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('resty@gmail.com')
});

test('Get Engineer name', () => {
    const engineer = new Engineer('Resty', 111, 'resty@gmail.com', 'resty123');

    expect(engineer.getName()).toEqual(expect.any(String));
});

test('Get Engineer ID', () => {
    const engineer = new Engineer('Resty', 111, 'resty@gmail.com', 'resty123');

    expect(engineer.getId()).toEqual(expect.any(Number))
});

test('Get Engineer email', () => {
    const engineer = new Engineer('Resty', 111, 'resty@gmail.com', 'resty123');

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test('Get Engineer Github', () => {
    const engineer = new Engineer('Resty', 111, 'resty@gmail.com', 'resty123');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('Get Engineer role', () => {
    const engineer = new Engineer('Resty', 111, 'resty@gmail.com', 'resty123')

    expect(engineer.getRole()).toEqual(expect.any(String));
});