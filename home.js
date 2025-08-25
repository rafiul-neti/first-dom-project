// activate style on cards 
function cardStyle(id) {
    const sharedStyles = document.getElementsByClassName("cards")

    for (const styles of sharedStyles) {
        styles.classList.remove("active-card");
    }
    document.getElementById(id).classList.add("active-card");
}

// pin-number function

function pin4Digit(id) {
    return document.getElementById(id).value;
}

// transactions data

const completedTransactions = [];

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
        alert("Please Provide Valid Information.")
    }
    const data = {
        name : "Add Money",
        time : new Date().toLocaleTimeString()
    }
    completedTransactions.push(data)
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
    const data = {
      name: "Cash Out",
      time: new Date().toLocaleTimeString(),
    };
    completedTransactions.push(data);
})

// transfer money button

document.getElementById("transfer-btn").addEventListener("click", function (e) {
    e.preventDefault()

    let mainBalance = Number(
      document.getElementById("available-balance").innerText
    );

    const accountNumber = document.getElementById("trans-num").value

    if (accountNumber.length < 11) {
        return alert("Please Provide a Valid Account Number")
    }

    const transferAmount = Number(document.getElementById("transfer-amount").value)

    const pin = "1234"
    
    if (pin4Digit("pin-trans") === pin) {
        mainBalance -= transferAmount
        document.getElementById("available-balance").innerText = mainBalance;
    } else {
        alert("Please Enter Valid Credentials")
    }
    const data = {
      name: "Transfer Money",
      time: new Date().toLocaleTimeString(),
    };
    completedTransactions.push(data);
})

// card toggling function

function cardsToggle(id) {
    const formsToggle = document.getElementsByClassName("all-forms")

    for (const form of formsToggle) {
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block";
}

// card toggling event listener

document.getElementById("add-money-card").addEventListener("click", function () {
    cardStyle("add-money-card")

    cardsToggle("add-money-parent")
})

document.getElementById("cash-out-card").addEventListener("click", function () {
    cardStyle("cash-out-card");

    cardsToggle("cash-out-parent");
})

document.getElementById("transfer-card").addEventListener("click", function () {
  cardStyle("transfer-card");

  cardsToggle("transfer-money-parent");
});

document.getElementById("bonus-card").addEventListener("click", function () {
  cardStyle("bonus-card");

  cardsToggle("bonus-parent");
});

document.getElementById("bill-card").addEventListener("click", function () {
  cardStyle("bill-card");

  cardsToggle("pay-bill-parent");
});

document.getElementById("transaction-card").addEventListener("click", function () {
    cardStyle("transaction-card");

    cardsToggle("transaction-parent");

    const transactionsData = document.getElementById("transaction-container");
    transactionsData.innerText = "";

    for (const transaction of completedTransactions) {
      const newDiv = document.createElement("div");

      newDiv.innerHTML = `
            <div class="bg-white flex justify-between items-center p-3 rounded-xl mt-4">
                    <div class="flex">
                        <img src="assets/wallet1.png" class="p-3 bg-[#f4f5f7] rounded-full" alt="">
                        <div class="ml-2">
                            <h1>${transaction.name}</h1>
                            <p>${transaction.time}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        `;

      transactionsData.appendChild(newDiv);
    }
  });