let name = {
    firstname: "Tanish",
    lastname: "Lamba",
   
}
let printFullName = function() {
    console.log(this.firstname + " " + this.lastname)
}

let printMyName = printFullName.bind(name)
printMyName()


Function.prototype.mybind = function(...args) {
    let obj = this
    return function(){
      obj.call(name)
    }
}