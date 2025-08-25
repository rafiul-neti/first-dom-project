document.getElementById("login-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const pinNum = 1234;
    const loginNumber = document.getElementById("login-num").value;

    if (loginNumber.length !== 11) {
        return alert ("Please Enter Valid Phone Number")
    }
    
    const pinNumNew = parseInt(document.getElementById("login-pin").value)
    
    if (
        pinNumNew === pinNum
    ) {
        window.location.href = 'home.html'
    } else {
       alert("Please provide the valid Info")
    }

    document.getElementById("myForm").reset();
})