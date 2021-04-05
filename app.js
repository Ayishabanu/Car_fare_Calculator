
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    //grab content from Kilometer input
let Kilometer = document.querySelector('#Kilometer');
let Petrol = document.querySelector('#Petrol');
let Milege = document.querySelector('#Milege');
const results = document.querySelector('#results');
    e.preventDefault();
    Kilometer = parseInt(Kilometer.value);
    Petrol = parseInt(Petrol.value);
    Milege = parseInt(Milege.value);

    if (isNaN(Kilometer) || isNaN(Petrol)){
        results.textContent = "Please enter a valid number!";
    } else if (Kilometer < 0 ) {
        results.textContent = "Please enter a Kilometer value > 0";
    } else if (Petrol < 0 ) {
        results.textContent = "Please enter an valid Petrol Rate";
    }else if (Milege < 0 ) {
        results.textContent = "Please enter an valid Milege Value";
    } else {
        //Calculating the fare
        let updown = (Kilometer * 2);
        let liter= updown / Milege;
        let rate= liter * Petrol;
        let res=rate.toFixed(2);
        results.textContent = `Rs.${res} `;
        document.querySelector('#Kilometer').value = '';
        document.querySelector('#Petrol').value = '';
    }
})
