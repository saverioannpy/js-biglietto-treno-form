Descrizione del problema:

    Scrivere un programma che chieda all’utente:
    Il numero di chilometri da percorrere
    Età del passeggero
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    MILESTONE 1:
    Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
    MILESTONE 2:
    Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


Idea di risoluzione:

    1. Utilizzare il prompt per chiedere all'utente di inserire il numero di km da percorrere e memorizzare il dato 
    nella variabile 'bigliettoKm'.
    1a. Trasformo il dato inserito in un numero utilizzando il metono Number().
    2. Effettuare un primo calcolo del prezzo del biglietto moltiplicando il dato appena inserito dall'utente per il prezzo al km (0.21€/km) e memorizziamo il risultato dell'operazione nella variabile 'bigliettoPrezzo'.
    3. Utilizzare il prompt per chiedere all'utente di inserire la sua età e memorizzare il dato nella variabile costante 'passeggeroEta'.
    3a. Trasformo il dato inserito in un numero utilizzando il metono Number().
    4. Implementare delle condizioni di controllo sull'età inserita dall'utente per poter stabilire se va calcolato o meno uno sconto: 

        CONDIZIONI:

            SE(passeggeroEta<18)
                APPLICARE UNO SCONTO DEL 20% AL BIGLIETTO;
            ALLORA SE(passegeroEta>65)
                APPRICARE UNO SCONTO DEL 40% AL BIGLIETTO;
            ALTRIMENTI
                L'UTENTE NON HA DIRITTO AD UNO SCONTO;


Commenti: 

    1. Si decide di calcolare il prezzo immediatamente dopo il primo input dell'utente e lasciare i controlli sull'input dell'età con i calcoli dello sconto separati in modo tale da poter poi spostare con facilità quest'ultimo blocco di condizione in una funzione futura.

    2. Viene utilizzata una sola variabile bigliettoPrezzo che non sarà una variabile costante ma sarà la stessa variabile che conterrà il primo calcolo sul prezzo e il successivo prezzo scontato.

    3. LOC:18 viene effettuato un console-log al di fuori del ciclo in modo tale da darci un aggiornamento a schermo sulla variazione del prezzo a prescindere se lo sconto venga applicato o meno. 

    4. Nel caso in cui lo sconto venga applicato si utilizza si utilizza il metodo .toFixed(2) per poter approssimare il risultato finale a sole due cifre decimali.