const url = "https://api.nbp.pl/api/exchangerates/tables/c/";
fetch(url)
.then((data) => data.json())
.then((data) => {
    let currency = data[0];
    const selectDOM = document.getElementById("selectC")
    const buttonDOM = document.getElementById("buttonC")
    const spanDOM = document.getElementById("spanC")
    const inputDOM = document.getElementById("inputC")
    let money = 0
    let selectedCurrency = 0
    const arrayCur = currency.rates.filter((record) => record.code === "USD" || record.code === "EUR" || record.code === "CHF")
    for(let record of arrayCur) {
        selectDOM.innerHTML += `<option value=${record.bid}>${record.code}</option>`;
        let bid = record.bid;
        selectDOM.addEventListener("change", (event) => {
            selectedCurrency = `${event.target.value}`
        });
        inputDOM.addEventListener("change", (event) => {
            money = inputDOM.value
        })
    }
    buttonDOM.addEventListener("click", function() {
        let result = (money * selectedCurrency).toFixed(2);
        if(money == 0) {
            spanDOM.textContent = "Prosimy podać ilość pieniędzy do przeliczenia"
        } else if(selectedCurrency == 0) {
            spanDOM.textContent = "Prosimy wybrać walutę"
        } else {
            spanDOM.textContent = "To " + result + "zł"
        }
    })
})
