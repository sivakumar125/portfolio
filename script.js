function showMessage() {
    var message = document.getElementById("message");


    message.classList.add("show");


    setTimeout(function() {
        message.classList.remove("show");
    }, 2000); 
}