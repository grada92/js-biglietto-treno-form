
// Calcolo prezzo biglietto

//let biglietto = km * 0.21;

// Imposto la Condizione
const addUsername = document.getElementById('username');
const age = document.getElementById('age');
const addKm = document.getElementById('km');
const result = document.getElementById('result');

result.addEventListener('click', 
    function() {
        let addUser = addUsername.value;
        console.log(addUser);

        let addAge = parseInt(age.value);
        console.log(addAge);

        let addKm = parseInt(km.value);
        console.log(addKm);

        let biglietto = addKm * 0.21;
        console.log(biglietto);

    if (age < 18) {
    let Percentuale20 = (biglietto / 100) * 20;
    biglietto = biglietto - Percentuale20;
    document.getElementById('ticket').innerHTML = 'il prezzo del biglietto è' + biglietto.toFixed(2)

    
    
    
    } else if (age > 65) {
    let Percentuale40 = (biglietto / 100) * 40;
    biglietto = biglietto - Percentuale40;
    


    }
    
    
    }

   

)


// document.getElementById('ticket').innerHTML = 'il prezzo del biglietto è' + biglietto.toFixed(2)






