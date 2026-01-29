const loanAmount = document.getElementById("loan-amount");
const interestAmount = document.getElementById("interest-rate");
const paymentMonths = document.getElementById("months-to-pay");

[loanAmount, interestAmount, paymentMonths].forEach(input => {
    input.addEventListener("input", loanCalculator)
});

function loanCalculator(){
    const loanAmountValue = Number(loanAmount.value);
    const interestAmountValue = Number(interestAmount.value);
    const paymentMonthsValue = Number(paymentMonths.value);
    const monthlyInterest = ((interestAmountValue / 100) / 12);
    // console.log(monthlyInterest)

    const top = monthlyInterest * Math.pow((1 + monthlyInterest), paymentMonthsValue);
    const bottom = Math.pow((1 + monthlyInterest), paymentMonthsValue) - 1;

    const monthlyPayment = loanAmountValue * (top / bottom);
    console.log(monthlyPayment.toFixed(2))
    const paymentEl = document.getElementById("monthly-payment");
    paymentEl.innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}`
}
loanCalculator()
