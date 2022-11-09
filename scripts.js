const button = document.getElementById('convertButton')
const select = document.getElementById('select-currency')

const dolar = 5.17
const euro = 5.19
const bitcoin = 90936.59


const convertValue = () => {
    const valorReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-Value-Text')
    const currencyValueText = document.getElementById('currency-Value-Text')


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorReal);



    if (select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorReal / dolar);
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorReal / euro);
    }

    if (select.value === '₿ Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(valorReal / bitcoin);
    }
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyiImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyiImg.src = "./assets/Estados-unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyiImg.src = "./assets/Euro.png"
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyiImg.src = "./assets/Bitcoin.png"
    }

    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)
