interface IUser {
    name: string,
    age:number,
    address:{
        street:string,
        road:string,
        district: "Dhaka" | "Bagerhat" | "Khulna"
    }
}
const ageAllowed = 25
const log = console.log
type messageType = (person: IUser) => string 

const getMessage:messageType = (person:IUser) : string =>  
"Hi, " + person.name + "!\n" + 
"Your Address: \n" + 
"   Street: " + person.address.street+ "\n"+
"   Road: " + person.address.road+ "\n"+
"   District: " + person.address.district+"\n"+
"Your age is " + (person.age > ageAllowed ? person.age + " > " + ageAllowed : person.age < ageAllowed ? person.age + " < " + ageAllowed : person.age) + "." +
(person.age < ageAllowed ? "\x1b[33m You are not allowed!\x1b[0m" : " You are allowed!") 
 
const createUser = (person:IUser) : string =>{
   return getMessage(person)
}
log(
createUser({
    name:"Hanif", 
    age: 29, 
    address:{
        street:"House #101, Block #B13, Lorem Street Lane",
        road:"Road #5",
        district:"Bagerhat"
    }
})
)
