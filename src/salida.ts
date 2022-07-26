let hi = "hello World";
hi = "HI";


let myNumber = 22;

console.log(myNumber)
//array
let stringArray: string[] = ["item1", "item2",""];
let numberArray: number[] = [1, 2, 3];
let booleanArray: boolean[] = [true, false, false];
let anyArray: any[] = [1, 2, "item1", false, "item2", ""];

//tuple
let stringNumTuple: [string, number];
stringNumTuple = [22 + "Hello", 22];
stringNumTuple = ["Wolrd", 25]


//void, indefined, null
//let myVoid: void = undefined;
//let myNull: null = null;
//let myUndifined: undefined = undefined;
//console.log(typeof(myVoid));

//functions
function getsum(num1: number, num2: number):number{
   return num1 + num2;
}

let n = function mySun(
  num1: number | string,
   num2: number | string):number{
   if(typeof (num1) === "string") {
    num1 = parseInt(num1);
   }
   if(typeof (num2) === "string") {
    num2 = parseInt(num2);
   }
   return num1 + num2;
 }
 /*
 function getName(
  firstname: string,
  secondName?: string): string{
  if(secondName == undefined) {
    return firstname
  }
   return `${firstname} ${secondName}`
 }

 console.log(getName("Luis", "perez"))
 */

//class
/*
class User {
  protected name: string;
  public email: string;
  public age: string;

  constructor(){
    name: string,
    email: string,
    age: Number
  }

  register(){
    console.log(`${this.name} is register!`)
  }
  private AgeinYears()
  { return this.age + " years"}

}

const jhon = new User("jhon");

console.log(jhon.age);
*/
