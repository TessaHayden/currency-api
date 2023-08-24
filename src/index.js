import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./currency";

function printElements(response) {
  let input = document.querySelector("#currency-type").value.toUpperCase();
  let amount = parseInt(document.querySelector("#usd-amount").value);

  let conversionRate = response.conversion_rates[`${input}`];
  let conversion = `${amount}` * conversionRate;
  document.querySelector(
    "#showResponse"
  ).innerText = `Here is the exchange rate from $${amount} USD to ${input}: ${conversion}`;
}

function printError(response) {
  document.querySelector("#showResponse").innerText =
    response.status + ", " + response["error_type"];
}

function handleFormSubmission(event) {
  event.preventDefault();
  const APIResponse = CurrencyExchange.getCurrencyExchange();
  APIResponse.then(function (succesfullResponse) {
    printElements(succesfullResponse);
  }).catch(function (error) {
    printError(error);
  });
}

window.addEventListener("load", function () {
  document
    .querySelector("form")
    .addEventListener("submit", handleFormSubmission);
});
