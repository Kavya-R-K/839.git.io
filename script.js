document.getElementById("marksheet").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var usn = document.getElementById("usn").value;
    if (name === "Nanditha P" && usn === "4UB21CS033") {
        window.location.href = "project.html";
    } else if (name === "Kavya R K" && usn === "4UB21CS020") {
        window.location.href = "k1.html";
    } else {
        alert("Invalid name or USN.Please try again");
    }

});