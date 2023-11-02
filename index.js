//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il piÃ¹ grande tra due numeri interi.
*/

let eta1 = 30;
let eta2 = 26;
// Si (succede questo: Eta1 è maggiore che età2)
if(eta1 > eta2){
    // Stampa o avvisa (dipende la funzione) questo sotto..
    console.log("Età uno è maggiore che età due");
}
else{ // Sarebbe un ALTRIMENTI
    console.log("L'età uno è inferiore");
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const num = 4
if (num < 5) {
  console.log("Tiny")
} else if (num < 10) {
  console.log("Small")
} else if (num < 15) {
  console.log("Medium")
} else if (num < 20) {
  console.log("Large")
} else if (num >= 20) {
  console.log("Huge")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 
  (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) { //In questo caso ti stampa i numero dal 0 al 10..
  if (i === 3 || i === 8) { //Ma senza il 3 e il 8 (perche i non è uguale a 3 e 8)
    continue//Fa sì che il ciclo 'for' salti l'iterazione corrente (quindi non esegue il console.log(i))  
    //e passi alla successiva iterazione. Questo significa che i valori 3 e 8 non verranno stampati nella console, 
    //mentre gli altri valori da 0 a 10 (esclusi 3 e 8) verranno stampati.
  } else console.log(i) //Ti stampa 0, 1, 2, 4, 5, 6, 7, 9, 10
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. 
  Per ciascun elemento, il ciclo deve controllare se il valore corrente sia pari o dispari, 
  e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) { // Qui mi sta dicendo che i è uguale a 0; i è minore o uguale a 15; e che i deve andare in su.
  if (i % 2 === 0) {// Mi fa vedere che i % 2 è 0 (perche i=0, e 0%2 è uguale a 0) se invece i=5, 5%2=1. Da dove viene fuori questo 1? Beh 2x2=4 +1 per arrivare a 5 (ecco l'uno)
    console.log(i + "pari") // Tutti quelli che (i % 2 === 0) glie stampera "pari" (tipo il 2, 4, 6, 8, 10, 12, 14)
  } else console.log(i + "dispari")//Tutti quelli che (i % 2 === 1) glie stampera "pari" (tipo il 1, 3, 5, 7, 9, 11, 13, 15)
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'Ã¨ una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi Ã¨ il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia Ã¨ multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero Ã¨ multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/