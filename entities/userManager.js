var fs = require('fs');

class UserManager {
    constructor(){

        this.getAll = getAll;
        this.getById = getById;
        this.add = add;
        this.generateId = generateId;

    }
}

function getAll(){
    return JSON.parse(fs.readFileSync("users.json", 'utf-8'));
}

function getById(id){
    var users = getAll();
    return users.find(function(u){ return u.id == id });
}

function add(user){
    var users = getAll();
    users.push( new User(user.name, user.age) );
    updateUsers(users);
}

function updateUsers(users){
    var _users = JSON.stringify(users, null, 4);
    return fs.writeFileSync("users.json", _users);
}

function generateId(){
    return Math.floor(Math.random() * 100000) + 1;
}

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.id = generateId();
    }
}

module.exports = UserManager;