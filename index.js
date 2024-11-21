let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;

    if (username != "") {
        document.getElementById("myH1").textContent = "The warmest welcome to you, " + username + "!";
    } else {
        document.getElementById("myH1").textContent = "Write something you piece of shit!";
    }


}