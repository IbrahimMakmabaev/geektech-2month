function generateNumbers() {

    document.getElementById('numbersContainer').innerHTML = '';

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 99) + 1;
        let formattedNumber = randomNumber < 10 ? '0' + randomNumber : '' + randomNumber;
        let numberCircle = document.createElement('div');
        numberCircle.className = 'number-circle';
        numberCircle.innerText = formattedNumber;
        document.getElementById('numbersContainer').appendChild(numberCircle);
    }
}