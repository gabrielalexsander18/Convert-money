const button = document.getElementById('convertButton')
const selectConvert = document.getElementById('select-convert')
const selectCurrency = document.getElementById('select-currency')


const convertValue = async () => {
    const valorReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-Value-Text')

    const currencyValueText = document.getElementById('currency-Value-Text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,BRL-USD").then( response => response.json())

    const real = data.BRLUSD.high  // valor do Real Brasileiro
    const dolar = data.USDBRL.high  // valor do Dólar Americano
    const euro = data.EURBRL.high  // valor do Euro
    const bitcoin = data.BTCBRL.high  // valor do Bitcoin

            // formatação dos números para valores de moedas
    if (selectCurrency.value === 'R$ Real brasileiro') {
        realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorReal);
    }

    if (selectCurrency.value === 'US$ Dólar americano') {
        realValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorReal);
    }

    if (selectCurrency.value === '€ Euro') {
        realValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorReal);
    }

    if (selectCurrency.value === '₿ Bitcoin') {
        realValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(valorReal);
    }

///////////////////////////////////////////////////////////////////////////////////////

            // converte as moedas fazendo as contas
    if (selectConvert.value === 'R$ Real brasileiro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorReal / real);
    }

    if (selectConvert.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorReal / dolar);
    }

    if (selectConvert.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorReal / euro);
    }

    if (selectConvert.value === '₿ Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(valorReal / bitcoin);
    }
}

            // troca de img e nome para identifação da moeda inicialmente selecionada
const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('#currency-img')

    if (selectCurrency.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/Estados-unidos.png"
    }

    if (selectCurrency.value === 'R$ Real brasileiro') {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/Brasil.png"
    }

    if (selectCurrency.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
    }

    if (selectCurrency.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.png"
    }

///////////////////////////////////////////////////////////////////////////////////

            // troca de img e nome para identifação da moeda para a qual será convertida
    const convertName = document.querySelector('#convert-name')
    const convertiImg = document.querySelector('#convert-img')

    if (selectConvert.value === 'US$ Dólar americano') {
        convertName.innerHTML = "Dólar americano"
        convertiImg.src = "./assets/Estados-unidos.png"
    }

    if (selectConvert.value === 'R$ Real brasileiro') {
        convertName.innerHTML = "Real"
        convertiImg.src = "./assets/Brasil.png"
    }

    if (selectConvert.value === '€ Euro') {
        convertName.innerHTML = "Euro"
        convertiImg.src = "./assets/Euro.png"
    }

    if (selectConvert.value === '₿ Bitcoin') {
        convertName.innerHTML = "Bitcoin"
        convertiImg.src = "./assets/Bitcoin.png"
    }

    convertValue()
}

button.addEventListener('click', convertValue)
selectConvert.addEventListener('change', changeCurrency)
selectCurrency.addEventListener('change', changeCurrency)
