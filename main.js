'use strict';

const bigliettoPrezzoPerKm = 0.21; // Costante prezzo biglietto al km
const bigliettoScontoMinorenni = 20; //Costante percentuale di sconto da applicare ai minorenni
const bigliettoScontoOver65 = 40; //Costante percentuale di sconto da applicare agli over65
let passeggeroSconto = 0; //Variabile globale che verrà utilizzata per calcolare lo sconto a cui si ha diritto (inizializzata a 0)
let bigliettoPrezzo; //Variabile globale che verrà utilizzata per calcolare il prezzo del biglietto (dalla quale verranno sottratti eventuali sconti
let passaggeroOfferta;
const bottoneGenera = document.getElementById('generaBtn');
bottoneGenera.addEventListener('click', //evento in ascolto sul bottone "Genera";
    function(){
        let passeggeroOfferta;
        const passeggeroNome = document.getElementById('passeggeroNomeSelect').value; //L'utente inserisce il proprio nome;
        console.log('[INPUT:]nome passeggero: ' + passeggeroNome); //LOG NON VISUALIZZATO!!!! 
        const bigliettoKm = Number(document.getElementById('bigliettoKmSelect').value); //L'utente inserisce la distanza;
        console.log('[INPUT:]km inseriti: ' + bigliettoKm);
        const passeggeroEta = document.getElementById('passeggeroEtaSelect').value;//L'utente inserisce la sua età;
        console.log('[INPUT:]età inserita: ' + passeggeroEta);
        if(!isNaN(bigliettoKm)){ //Verifica che i dati inseriti siano SOLO numerici;
            bigliettoPrezzo = bigliettoKm * bigliettoPrezzoPerKm; //Viene calcolato il prezzo del biglietto (0.21€/km);
             if(passeggeroEta === "Minorenne"){//Controllo se il passeggero è minorenne e calcolo lo sconto del 20%;

                passeggeroSconto = ((bigliettoPrezzo / 100) * bigliettoScontoMinorenni);
                console.log('[CALC:] sconto da applicare: ' + passeggeroSconto);
                passeggeroOfferta = 'Biglietto Under 18';

            }else if(passeggeroEta === "Over 65"){ //Controllo se il passeggero è over65 e calcolo lo sconto del 40%;

                passeggeroSconto = ((bigliettoPrezzo / 100) * bigliettoScontoOver65); 
                console.log('[CALC:]sconto da applicare: ' + passeggeroSconto);
                passeggeroOfferta = "Biglietto Over 65";
                
            }else{ //per ragioni di TEST viene visualizzato a schermo che lo sconto da applicare è pari a 0;
                console.log('[CALC:]sconto da applicare: ' + passeggeroSconto);
                passeggeroOfferta = "Biglietto Standard";
            }
        }
    bigliettoPrezzo = bigliettoPrezzo - passeggeroSconto; //applicazione sconto al costo del biglietto.
    console.log('[CALC:]prezzo biglietto: ' + (bigliettoPrezzo).toFixed(2)); //Console-log del prezzo Finale.
    const mainBottomOut = document.getElementById('mainBottomId');
    console.log(mainBottomOut);
    mainBottomOut.classList.replace("d-none", "d-block");
    const passeggeroNomeOut = document.getElementById('passeggetoNomeId'); //Viene preso l'elemento p del campo Nome Passeggero
    passeggeroNomeOut.innerHTML = passeggeroNome;
    const passeggeroOffertaOut = document.getElementById('passeggeroOffertaId');//Viene preso l'elemento p del campo  Offerta
    passeggeroOffertaOut.innerHTML = passeggeroOfferta;
    const passeggeroCarrozzaOut = document.getElementById('passeggeroCarrozzaId');//Viene preso l'elemento p del campo Carrozza
    passeggeroCarrozzaOut.innerHTML = '5';
    const passeggeroCodiceOut = document.getElementById('passeggeroCodiceId');//Viene preso l'elemento p del campo Codice CP
    passeggeroCodiceOut.innerHTML = '123456';
    const passeggeroBigliettoOut = document.getElementById('passeggeroBigliettoId');//Viene preso l'elemento p del campo del prezzo del biglietto
    passeggeroBigliettoOut.innerHTML = bigliettoPrezzo.toFixed(2);
    }
);
const bottoneReset = document.getElementById('resetBtn');
bottoneReset.addEventListener('click', //evento in ascolto sul bottone "Reset";
    function(){
        window.location.reload();
    }
)