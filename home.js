// activate style on cards 

function cardStyle(id) {
    const sharedStyles = document.getElementsByClassName("cards")

    for (const styles of sharedStyles) {
        styles.classList.remove("active-card");
    }
    document.getElementById(id).classList.add("active-card");
}



document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const accountNum = document.getElementById("account-num").value
    if (accountNum.length !== 11) {
        alert('Please Provide Valid Account Number')
        return
    }

    const pinNum = 1234;

    const validPin = Number(document.getElementById("valid-pin").value)

    let availableBalance = Number(document.getElementById("available-balance").innerText);

    const addAmount = Number(document.getElementById("add-amount").value);

    if (validPin === pinNum) {
        availableBalance += addAmount
        document.getElementById("available-balance").innerText = availableBalance
    } else {
        alert("Please Provide Valid Informations.")
    }
})


// cash out

document.getElementById("cash-out-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const pinNum = 1234;

    const agentNum = document.getElementById("agent-num").value

    if (agentNum.length !== 11) {
        return alert("Please Provide An Valid Agent Number")
    }

    let usableBalance = Number(
      document.getElementById("available-balance").innerText
    );
    
    const cashOutAmount = Number(
      document.getElementById("cashout-amount").value
    );

    const validPin = Number(document.getElementById("pin-c-out").value)

    if (validPin === pinNum) {
        usableBalance -= cashOutAmount;
        document.getElementById("available-balance").innerText = usableBalance
    } else {
        alert("Please Check Your Info & Provide Correct Info")
    }
})

// toggle

document.getElementById("add-money-card").addEventListener("click", function () {
    cardStyle("add-money-card")

    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-card").addEventListener("click", function () {
        cardStyle("cash-out-card");

    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
})