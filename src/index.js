import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyService from "./currency-service";

function getExchangeRate(currency) {
  let promise = CurrencyService.getExchangeRate(currency);
  promise.then(
    function (currencyArray) {
      printElements(currencyArray);
      conversionFunc();
    },
    function (errorArray) {
      printError(errorArray);
    }
  );
}

function printElements() {
  let input = "input";
  document.querySelector(
    "#showResponse"
  ).innerText = `Here is the exchange rate from USD to ${input}`;
}
function printError(error) {
  document.querySelector(
    "#showResponse"
  ).innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}
function conversionFunc(promise) {
  if (promise.result === "success") {
    console.log("working");
  } else {
    const htmlOutput = promise.conversion_rates
      .map(
        (el) =>
          `<li>${el.conversion_rates}\n<p>-- ${el.conversion_rates} --</p></li>`
      )
      .join("");
    const list = document.getElementById("currency-abb");
    list.innerHTML = htmlOutput;
  }
}
function handleFormSubmission(event) {
  event.preventDefault();
  const currencyType = document.querySelector("#currency-type").value;
  document.querySelector("#currency-type").value = null;
  getExchangeRate(currencyType);
}

window.addEventListener("load", function () {
  document
    .querySelector("form")
    .addEventListener("submit", handleFormSubmission);
});
