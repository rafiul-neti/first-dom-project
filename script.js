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
        window.location.href = 'home.html'
    } else {
       alert("Please provide the valid Info")
    }
})




/**
document.getElementById("cash-out-card").style.border = "1px solid #0874f2";
    document.getElementById("cash-out-heading").style.color = "#0874f2";

    document.getElementById("add-money-card").style.border = "1px solid #ccc";
    document.getElementById("add-heading").style.color = "#000";


    document.getElementById("cash-out-parent").style.display = "block";
    document.getElementById("add-money-parent").style.display = "none"; 
*/ 




 