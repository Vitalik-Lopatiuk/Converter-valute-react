const ConvertInput = () => {
    


    
    const select_valute = document.querySelector('.select-valute')
    const inputValute = document.querySelector('.input-valute').value
    const result = document.querySelector('.result')
    


    if (select_valute.value === 'UAH/USD') {
        const resultSum = inputValute * 36
        result.innerHTML = resultSum

    }

    if (select_valute.value === 'EUR/USD') {
        const resultSum = inputValute * 1
        result.innerHTML = resultSum
    }

    if (select_valute.value === 'UAH/EUR') {
        const resultSum = inputValute * 40
        result.innerHTML = resultSum
    }

}

export default ConvertInput