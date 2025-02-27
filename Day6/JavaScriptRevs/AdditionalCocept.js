let name = {
    firstname: "Tanish",
    lastname: "Lamba",
   
}
let printFullName = function(hometown, state) {
    console.log(this.firstname + " " + this.lastname + " "+ hometown + " , " + state)
}
//call method
printFullName.call(name,"Palwal", "Haryana");
// apply methed
printFullName.apply(name, ["Palwal", "Haryana"])
// bind methed
let printMyName = printFullName.bind(name,"Palwal", "Haryana");
printMyName();

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",

} 
//call method
printFullName.call(name2,"Mumbai", "Maharashtra")

// apply methed
printFullName.apply(name2,["Mumbai", "Maharashtra"])

// bind methed
let printMyName2 = printFullName.bind(name2, "Mumbai", "Maharashtra");
printMyName2();