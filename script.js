
// Imposto la Condizione
const addUsername = document.getElementById('username');
const age = document.getElementById('age');
const addKm = document.getElementById('km');
const result = document.getElementById('result');
const name = document.getElementById('namepassenger');


result.addEventListener('click', 
    function() {
        let addUser = addUsername.value;
        console.log(addUser);

        let addAge = parseInt(age.value);
        console.log(addAge);

        let addKm = parseInt(km.value);
        console.log(addKm);




        // Calcolo Biglietto
        
        let biglietto = addKm * 0.21;
        
        

    if (addAge < 18) {
    let Percentuale20 = (biglietto / 100) * 20;
    biglietto = biglietto - Percentuale20;
    
       
    } else if (addAge > 65) {
    let Percentuale40 = (biglietto / 100) * 40;
    biglietto = biglietto - Percentuale40;
    


    }
    
    document.getElementById('ticket').innerHTML = biglietto.toFixed(2) + '€' ;
    document.getElementById('namepassenger').innerHTML = addUser;
    }

)







