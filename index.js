document.getElementById("submitBtn").onclick = function(){
    let temp;

    if(document.getElementById("celsius").checked){

        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("answer").innerHTML = temp + "°C"
    }
    else if (document.getElementById("fahrenheit").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("answer").innerHTML = temp + "°F"
    }
    else{
        document.getElementById("answer").innerHTML = "Select a unit";
    }
}


function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9 /5 + 32;
}