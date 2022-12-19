const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
let engineers = [];
let interns = [];
let manager = [];

//starts the program
promptManager();

async function promptManager() {    
    await inquirer.prompt([
        {
            name: 'managerName',
            type: 'input',
            message: "Please enter the team manager's name..",   
            validate: function(managerName){
                if(!managerName.length){
                    console.log('please type something..');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            name: 'managerId',
            type: 'input',
            message: "Please enter the managers ID number",
            validate: function(managerId){
                if(!managerId.length){
                    console.log('please type something..');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            name: 'managerEmail',
            type: 'input',
            message: 'Please eneter the team manager email',
            validate: function (managerEmail) {  
                /*
                Using regex to check for email pattern. The content in the paranthesis denotes a specific segment of the email address and within them are the parameters that are allowed within them seperated by
                the  . (period) symbol ex. the pattern ([a-z\d\.-]+) states that characters from a-z lowercase are allowed. The \d states it can contain digits along with dots and dashes and the + indicates one 
                or more will be present. -> philip.boot-camp@yada.ca or com
                */
                valid = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/.test(managerEmail)    
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email")
                    return false;
                }
            },
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is the managers office number',
            validate: function(officeNumber){
                //regEx testing for only numbers
                valid = /^\d+$/.test(officeNumber)
                if (valid){
                    return true;
                } else {
                    console.log('please type a number for the office..');
                    return false;
                }
            }
        },
    ]).then((data)=> { manager.push(data)}).then(menuPrompt);


    async function menuPrompt(){
        await inquirer.prompt([
                {
                    name: 'menu',
                    type: 'checkbox',
                    message: 'Who would you like to add',
                    choices: [
                        {name: 'Engineer', value: 'Engineer'},
                        {name: 'Intern', value: 'Intern'},
                        {name: 'exit', value: 'exit'},                    
                    ]
                },
            ]).then(async(data) => {
                callInquirers(data.menu)
            })
    }
    
    //calls the respective inquirers to get input for different employee types
    function callInquirers(data) {
        if (data[0] === 'Engineer'){
            promptEngineer();
        } else if (data[0] === 'Intern'){
            promptIntern();
        } else {
            createClasses();
        }
    }

    //creates the engineer class
    async function promptEngineer(){
        await inquirer.prompt([
            {
                name: 'engineerName',
                type: 'input',
                message: "Please enter the engineer's name..",   
                validate: function(engineerName){
                    if(!engineerName.length){
                        console.log('please type something..');
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                name: 'engineerId',
                type: 'input',
                message: "Please enter the engineers ID number",
                validate: function(engineerId){
                    if(!engineerId.length){
                        console.log('please type something..');
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                name: 'engineerEmail',
                type: 'input',
                message: 'Please eneter the engineers email',
                validate: function (engineerEmail) {  
                    valid = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/.test(engineerEmail)    
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email")
                        return false;
                    }
                },
            },
            {
                name: 'engineerGitHub',
                type: 'input',
                message: 'what is the engineers github username',
                validate: function(engineerGitHub){
                    if(!engineerGitHub.length){
                        console.log('please type something..');
                        return false;
                    } else {
                        return true;
                    }
                }
            },
        ]).then((data)=> { engineers.push(data)}).then(menuPrompt);
    }

    async function promptIntern(){
        await inquirer.prompt([
            {
                name: 'internName',
                type: 'input',
                message: "Please enter the intern's name..",   
                validate: function(internName){
                    if(!internName.length){
                        console.log('please type something..');
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                name: 'internId',
                type: 'input',
                message: "Please enter the interns ID number",
                validate: function(internId){
                    if(!internId.length){
                        console.log('please type something..');
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                name: 'internEmail',
                type: 'input',
                message: 'Please eneter the Interns email',
                validate: function (internEmail) {  
                    valid = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/.test(internEmail)    
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email")
                        return false;
                    }
                },
            },
            {
                name: 'school',
                type: 'input',
                message: 'What institution name is the student from..',
                validate: function (school){
                    if(!school.length){
                        console.log('please type something..');
                        return false;
                    } else {
                        return true;
                    }
                }                
            },
        ]).then((data) => {
            interns.push(data);
        }).then(menuPrompt)
    }

    //once the inquirer program is done then the classes are created
    function createClasses(){
        const newmanager = new Manager (manager[0].managerName, manager[0].managerId, manager[0].managerEmail, manager[0].officeNumber);  
        let currentEngineers = [];
        let currentInterns = [];
        console.log(engineers.length);

        engineers.forEach((data) => {
            currentEngineers.push(new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub))
        })     

        interns.forEach((data) => {
            currentInterns.push(new Intern(data.internName, data.internId, data.internEmail, data.school))
        })
        console.log("current Manager is: ") 
        console.log(newmanager);
        console.log("current Engineers are: ")   
        console.log(currentEngineers[0].getRole());
        console.log(currentEngineers.length)
        console.log("Current interns are: ")
        console.log(currentInterns);

    }

}



