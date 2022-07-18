//organize all of your data with classes and give it behavior 
const UserObject = {
    firstName: "Norah",
    lastName: "Taylor",
    singup: function () {
        console.log(this.firstName, "signup up!") //what is 'this'? specifies this object itself 
    }
}

console.log(UserObject)
//classes are data structure that allows us to create blueprints for future objects 
//obj in js are {}
//more abstract def of obj is anything in comp that entity, strings, arrays 

class User {
    // constructor tells JS what any given instance of User consists of 
    //constructor () is called automatically any time you say "new" in JS
    constructor(name, email, password) {
        //specify exactly where to attach this data 
        //saying name is anyting that is passed into (name, email, password)
        this.name = name
        this.email = email
        this.password = password
    }
    //signup is global to this class 
    signup() {
        console.log(this.name, 'signup')
    }
}
//grabs functionality from another class
//inherits from, user is the superclass 
//any function you define in User is accessible in AdminUser 

class AdminUser extends User {
    constructor(name, email, password) {
        super(name, email, password) //super says, take first constructor and run it. and then 
        this.admin = true
        //specificy whats different under user 
    }
}
//user is a data structure that has these attributes: name, email, pw
let user = new User('Norah', 'emt@gmail.com', '1234')

console.log(user.signup())

//put all this in console to see console.logs 