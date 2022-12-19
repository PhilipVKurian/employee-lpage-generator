const Intern = require('../lib/Intern')

describe('test the employee super class method to return corect name getName() method', () =>{
    it('should return the correct name', () => {
        const intern = new Intern('Jimmy', 123, 'jimmiboi@noob.com', 'lambtoncollege');
        expect(intern.getName()).toBe('Jimmy');
    })
});

describe('test the Intern class method to return corect school getSchool() method', () =>{
    it('should return the correct name lambtoncollege', () => {
        const intern = new Intern('Jimmy', 123, 'jimmiboi@noob.com', 'lambtoncollege');
        expect(intern.getSchool()).toBe('lambtoncollege');
    })
});
describe('test the Intern class method to return corect role getRole() method', () =>{
    it('should return the correct role of Intern', () => {
        const intern = new Intern('Jimmy', 123, 'jimmiboi@noob.com', 'lambtoncollege');
        expect(intern.getRole()).toBe('Intern');
    })
});