import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service'

function getExchangeRate(currency) {
  let promise = CurrencyService.getExchangeRate(currency);
  promise.then(function (currencyArray) {
    printElements(currencyArray);
  }, function (errorArray) {
    printError(errorArray);
  });
}

function printElements(data) {
  document.querySelector(
    "#showResponse"
  ).innerText = `Here is the exchange rate from USD to ${data.conversion_rates}`;
}
function printError(error) {
  document.querySelector(
    "#showResponse"
  ).innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currencyType = document.querySelector("#currency-type").value;
  document.querySelector("#currency-type").value = null;
  getExchangeRate(currencyType);
}

window.addEventListener("load", function () {
  this.document
    .querySelector("form")
    .addEventListener("submit", handleFormSubmission);
});