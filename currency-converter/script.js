// const API_Key= aae4c3bcff39fc4ab910fdfd
// request =  https://v6.exchangerate-api.com/v6/aae4c3bcff39fc4ab910fdfd/latest/USD

const firstCurrencyEl = document.getElementById("currency-first");
const secondCurrencyEl = document.getElementById("currency-second");
const firstValueEl = document.getElementById("worth-first");
const secondValueEl = document.getElementById("worth-second");

firstCurrencyEl.addEventListener("change", updateCurrency);
secondCurrencyEl.addEventListener("change", updateCurrency);
firstValueEl.addEventListener("input", updateCurrency);

function updateCurrency(){
    console.log("called")
}