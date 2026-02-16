//OBJECTS:  key ={value} 

const user={
    name:"Ayesha",
    age:"20",
    emailId:"Iayesha@hmail.com",
    amount:3400
}

console.log( typeof user)

console.log(user.age)
 
// CRUD operation
user.adhar=346667;  //create
console.log(user )

console.log(user.age)   //read

user.amount=7000;    //update
console.log(user)


delete user.age;  // delete
console.log(user)
