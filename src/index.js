import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

function getExchangeRate(currency) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, currency);
    }
  });
  request.open("GET", url, true);
  request.send();
}
function printElements(response) {
  let input = document.querySelector('#currency-type').value;
  input.toUpperCase();
  let amount = parseInt(document.querySelector('#usd-amount').value);
  document.querySelector(
    "#currency-abb"
  ).innerText = `Here is the exchange rate from ${amount} USD to ${input}`;
  console.log(response.conversion_rates);
  if (response) {
    const abbreviation = response.conversion_rates.input;
    console.log(abbreviation);
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currencyType = document.querySelector("#currency-type").value;
  getExchangeRate(currencyType);
}

window.addEventListener("load", function () {
  document
    .querySelector("form")
    .addEventListener("submit", handleFormSubmission);
});
