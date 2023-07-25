fetch("http://localhost:8090/api/v1/player")
    .then((response) => { return response.json() })
    .then((parsedResponse) => {
        console.log(parsedResponse);
        let lopObj = document.getElementById("lop");

        parsedResponse.forEach(element => {
            let newListItem = document.createElement("li");
            newListItem.textContent = element.id + " -- " + element.name;
            lopObj.appendChild(newListItem);
        });
    })


let playerRegForm = document.getElementById("playerRegForm");
playerRegForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let playerId = document.getElementById("playerId").value;
    let playerName = document.getElementById("playerName").value;

    console.log(playerId);
    console.log(playerName);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": playerId,
        "name": playerName
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8090/api/v1/player", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

});

let playerUpForm = document.getElementById("playerUpForm");
playerUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let playerId = document.getElementById("playerId").value;
    let playerName = document.getElementById("playerName").value;

    console.log(playerId);
    console.log(playerName);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": playerId,
        "name": playerName
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8090/api/v1/player/" + playerId, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

});

let playerDelForm = document.getElementById("playerDelForm");
playerDelForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let playerId = document.getElementById("playerId").value;
    let playerName = document.getElementById("playerName").value;

    console.log(playerId);
    console.log(playerName);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": playerId,
        "name": playerName
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8090/api/v1/player/" + playerId, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

});