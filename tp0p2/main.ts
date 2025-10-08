let username : string = "robert";
let age : number = 24;
let isStudent : boolean;
let id : number | string

let skills: string[] = ["HTML", "CSS"];

function add() {
let a: number = 1;
let b: number = 2;
return a + b;
}

function displayUser() {
        return ("il s'appelle") + (" ") + username + (" ") + ("et a ") + age + (" ans");
    }

console.log(displayUser());