                             // scope 3 typer 1. Global Scope, 2. Local Scope, 3.Block Scope
var nam="MIM" ;               //global scope-we can access the value any where we can want
console.log(nam);

function me(){
    console.log(nam);
    var num=50;              //local scope- only function er bhitore access korte parbo
     console.log(num);
}
me()

//console.log(num);             //not print because local scope


{
    let fname="Hello World";   //block scope
    console.log (fname);

}