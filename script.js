console.log('script')
document.getElementById("login-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const mobileNumber = 8801635824659;
    const pinNum = 1234;
    const loginNumber = document.getElementById("login-num").value;
    const loginPinNum = document.getElementById("login-pin").value
    const loginNumberNew = parseInt(loginNumber)
    const pinNumNew = parseInt(loginPinNum)
    
    if (loginNumberNew === mobileNumber &&
        pinNumNew === pinNum
    ) {
        console.log('clickedd')
    } else {
       alert("Please provide the valid Info")
    }
})