export default class CurrencyExchange {
  static getCurrencyExchange() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(response);
        } else {
          reject({
            status: request.status,
            error_type: response["error-type"],
          });
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}
