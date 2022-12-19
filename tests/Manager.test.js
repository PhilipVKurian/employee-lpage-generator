const Manager = require('../lib/Manager')

describe('testing the methods in the superclass of Manager instance class', () =>{
    it('should return the correct name John', ()=> {
        const manager = new Manager('John', 123 , 'john@yahoo.com', 12354);
        expect(manager.getName()).toBe('John');
    }) 
});

describe('testing the methods in the Manager class Get Role', () =>{
    it('should return the override manager', ()=> {
        const manager = new Manager('John', 123 , 'john@yahoo.com', 12354);
        expect(manager.getRole()).toBe('Manager');
    }) 
});

describe('testing the  Manager class office number', () =>{
    it('should return the override manager', ()=> {
        const manager = new Manager('John', 123 , 'john@yahoo.com', 12354);
        expect(manager.officeNumber).toBe(12354);
    }) 
});