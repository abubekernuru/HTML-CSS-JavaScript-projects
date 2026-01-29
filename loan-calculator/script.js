
loanCalculator()
function loanCalculator(){
    const loanAmountValue = document.getElementById("loan-amount").value;
    const interestAmountValue = document.getElementById("interest-rate").value;
    const paymentMonthsValue = document.getElementById("months-to-pay").value;
    const monthlyInterest = ((interestAmountValue / 100) / 12);
    // console.log(monthlyInterest)

    const top = monthlyInterest * Math.pow((1 + monthlyInterest), paymentMonthsValue);
    const bottom = Math.pow((1 + monthlyInterest), paymentMonthsValue) - 1;

    const monthlyPayment = loanAmountValue * (top / bottom);
    console.log(monthlyPayment.toFixed(2))
    const paymentEl = document.getElementById("monthly-payment");
    paymentEl.innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}`
}

