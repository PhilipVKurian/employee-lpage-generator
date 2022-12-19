const Employee = require('../lib/Employee')

describe('Returns role default', () => {
    it('should return Employee', () => {
        const employee = new Employee('john', 123, 'john@john.com');
        expect(employee.getRole()).toBe("Employee");
    })
});
describe('Returns correct name', ()=>{
    it('getName method is being tested', () =>{
        const employee = new Employee('Samuel', 1234, 'sammyboi@gmail.com');
        expect(employee.getName()).toBe('Samuel');
    })
});
describe('Returns correct ID', ()=>{
    it('getID method is being tested', () =>{
        const employee = new Employee('Samuel', 1234, 'sammyboi@gmail.com');
        expect(employee.getID()).toBe(1234);
    })
});

describe('Returns correct Email', ()=>{
    it('getEmail() method is being tested', () =>{
        const employee = new Employee('Samuel', 1234, 'sammyboi@gmail.com');
        expect(employee.getEmail()).toBe('sammyboi@gmail.com');
    })
});