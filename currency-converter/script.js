// const API_Key= aae4c3bcff39fc4ab910fdfd
// request =  https://v6.exchangerate-api.com/v6/aae4c3bcff39fc4ab910fdfd/latest/USD

const firstCurrencyEl = document.getElementById("currency-first");
const secondCurrencyEl = document.getElementById("currency-second");
const firstValueEl = document.getElementById("worth-first");
const secondValueEl = document.getElementById("worth-second");
const exchangerateEl = document.getElementById("exchange-rate");

firstCurrencyEl.addEventListener("change", updateCurrency);
secondCurrencyEl.addEventListener("change", updateCurrency);
firstValueEl.addEventListener("input", updateCurrency);

async function updateCurrency(){
    const res = await fetch(`https://v6.exchangerate-api.com/v6/aae4c3bcff39fc4ab910fdfd/latest/${firstCurrencyEl.value}`);
    const data = await res.json();
    // console.log(data)
    let rates = data.conversion_rates[secondCurrencyEl.value]
    secondValueEl.value = (rates * firstValueEl.value).toFixed(2)
    exchangerateEl.innerText = `1 ${firstCurrencyEl.value} ~ ${data.conversion_rates[secondCurrencyEl.value]} ${secondCurrencyEl.value}`
}