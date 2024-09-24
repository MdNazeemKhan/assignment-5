let totalDonation = 0;
let userBalance = 1000;
let donationHistory = [];

function donateAmount() {
    const amount = parseFloat(document.getElementById('donation-amount').value);
    if (!isNaN(amount) && amount > 0) {
        donate(amount);
        recordDonation(amount);
        
        document.getElementById('donation-amount').value = '';
    } else {
        alert("Please enter a valid donation amount.");
    }
}

function addDonation(amount) {
    totalDonation += amount;
    updateTotalDisplay();
}

function updateTotalDisplay() {
    document.getElementById('total-donation').innerText = `${totalDonation}`;
}

function donate(amount) {
    if (amount <= userBalance) {
        userBalance -= amount;
        addDonation(amount);
        updateUserBalanceDisplay();
    } else {
        alert("Insufficient Balance!");
    }
}

function updateUserBalanceDisplay() {
    document.getElementById('user-balance').innerText = `${userBalance}`;
}

function recordDonation(amount) {
    const donationEntry = {
        amount: amount,
        date: new Date().toLocaleString()
    };
    donationHistory.push(donationEntry);
    localStorage.setItem('donationHistory', JSON.stringify(donationHistory));
}


function openHistoryPage() {
    window.open('donation-history.html', '_blank');
}

function donateAmount() {
        const amount = parseFloat(document.getElementById('donation-amount').value);
        if (!isNaN(amount) && amount > 0) {
            donate(amount);
            recordDonation(amount);
            
            document.getElementById('donation-amount').value = '';
           
            alert("Donation successful! Thank you for your contribution.");
        } else {
            alert("Please enter a valid donation amount.");
        }
    }
    
    



    