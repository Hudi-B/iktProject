document.getElementById('btn').onclick = function(event){
    event.preventDefault
    fetch('https://192.168.10.10:8500/Pizza', {
    method : "GET",
    mode : "cors",
    headers : {
        "Acces-Control-Allow-Origin" : "*"
    }
    })
.then(response => {
    if (!response.ok) {
      console.log("szar a szerver faszkalap")
    }
    return response.json();
    })
    .then(function(response){
        return console.log(response)
    })
}

document.getElementById('btn1').onclick = function(event1){
    event1.preventDefault
    idInput = document.getElementById("idInput").value
    fetch('https://192.168.10.10:8500/Pizza/' + idInput, {
    method : "GET",
    mode : "cors",
    headers : {
        "Acces-Control-Allow-Origin" : "*"
    }
    })
.then(response => {
    if (!response.ok) {
      console.log("szar a szerver faszkalap")
    }
    return response.json();
    })
    .then(function(response){
            console.log(response);
    })
}