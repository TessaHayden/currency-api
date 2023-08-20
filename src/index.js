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
  let input = document.querySelector("#currency-type").value.toUpperCase();
  let amount = parseInt(document.querySelector("#usd-amount").value);
  if (input === "AOA") {
    let abbreviation = response.conversion_rates.AOA;
    let conversion = `${amount}` * abbreviation;
    document.querySelector(
      "#showResponse"
    ).innerText = `Here is the exchange rate from $${amount} USD to ${input}: ${conversion}`;
  } else if (input === "AED") {
    let abbreviation = response.conversion_rates.AED;
    let conversion = `${amount}` * abbreviation;
    document.querySelector(
      "#showResponse"
    ).innerText = `Here is the exchange rate from $${amount} USD to ${input}: ${conversion}`;
  } else if (input === "AFN") {
    let abbreviation = response.conversion_rates.AFN;
    let conversion = `${amount}` * abbreviation;
    document.querySelector(
      "#showResponse"
    ).innerText = `Here is the exchange rate from  $${amount} USD to ${input}: ${conversion}`;
  } else if (input === "ALL") {
    let abbreviation = response.conversion_rates.ALL;
    let conversion = `${amount}` * abbreviation;
    document.querySelector(
      "#showResponse"
    ).innerText = `Here is the exchange rate from $${amount} USD to ${input}: ${conversion}`;
  } else if (input === "AMD") {
    let abbreviation = response.conversion_rates.AMD;
    let conversion = `${amount}` * abbreviation;
    document.querySelector(
      "#showResponse"
    ).innerText = `Here is the exchange rate from $${amount} USD to ${input}: ${conversion}`;
  } else if (input === "ANG") {
    let abbreviation = response.conversion_rates.ANG;
    let conversion = `${amount}` * abbreviation;
    document.querySelector(
      "#showResponse"
    ).innerText = `Here is the exchange rate from $${amount} USD to ${input}: ${conversion}`;
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
