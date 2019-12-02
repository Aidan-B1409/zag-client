$(updateView)
$(greeter)

function add(num1, num2){
    number = num1 + num2;
    console.log("The Sum Is: " + number);
}

function greeter(){
    alert("Hi" + person.name);
}

var person = {name:"PutYourNameHere",age:"PutYourAgeHere",car:{make:"Chevy",model:"Silverado"}}
    
function updateView(){
    $.when($.getJSON(BASE_URL + "/rides/count/per_month", perYear),
    ).then(updateChart);
}


