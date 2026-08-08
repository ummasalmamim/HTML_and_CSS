
//inner function ke outer function access korte parbe but outer function ke inner function access korte parbe na

var name="mim";
let bangladesh="jim ";

function World (){
    var myname ="Mim";
    function country() {
        console.log(myname) ; 
            let city= "Dhaka"
             console.log(city)

    }

    country()

   
}

World()