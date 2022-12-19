const Engineer = require('../lib/Engineer')

describe('testing the engineer class to get name from super class employee', () =>{
    it('should return the correct name passed into super', () =>{
        const engineer = new Engineer('Paulo', 123, 'paulo@gmail.com', 'sampolo');
        expect(engineer.getName()).toBe('Paulo');        
    })    
});

describe('testing the engineer class to see if getGitHub method works', () =>{
    it('should return the github of the created employee', () =>{
        const engineer = new Engineer('Paulo', 123, 'paulo@gmail.com', 'sampolo');
        expect(engineer.getGitHub()).toBe('sampolo');        
    })    
});

describe('testing the engineer class getRole() method', () =>{
    it('should return the correct role Engineer', () =>{
        const engineer = new Engineer('Paulo', 123, 'paulo@gmail.com', 'sampolo');
        expect(engineer.getRole()).toBe('Engineer');        
    })    
});