/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/*function area(l1, l2) {
  const rettangoloArea = l1 * l2

  return rettangoloArea
}


const lunghezza1 = 5
const lunghezza2 = 8
const risultato = area(lunghezza1, lunghezza2)

console.log(
  `L'area del rettangolo con lati ${lunghezza1} e ${lunghezza2} è ${risultato}.`
)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3
  } else {
    return num1 + num2
  }
}

const numero1 = 5
const numero2 = 5
const risultato = crazySum(numero1, numero2)

console.log(`Il risultato di crazySum(${numero1}, ${numero2}) è ${risultato}.`)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/*function crazyDiff(numero) {
  const differenzaAssoluta = Math.abs(numero - 19)

  if (numero > 19) {
    return differenzaAssoluta * 3
  } else {
    return differenzaAssoluta
  }
}

const numeroDaValutare = 25
const risultato = crazyDiff(numeroDaValutare)

console.log(`Il risultato di crazyDiff(${numeroDaValutare}) è ${risultato}.`)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/*function boundary(n) {
  /**
   * Verifica se il numero intero n è compreso tra 20 e 100 (incluso) oppure uguale a 400.
   * @param n - Numero intero da verificare
   * @returns True se n soddisfa le condizioni, altrimenti False
   */
/*return (n >= 20 && n <= 100) || n === 400
}

// Esempi di utilizzo:
console.log(boundary(50)) // True
console.log(boundary(150)) // False
console.log(boundary(400)) // True */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/*function reverseString(str) {
  return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0)
}
console.log(reverseString('EPICODE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/*function cutString(inputString) {
  if (inputString.length < 2) {
    return ''
  } else {
    return inputString.slice(1, -1)
  }
}

const originalString = 'Hello, World!'
const modifiedString = cutString(originalString)
console.log(modifiedString)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/*function giveMeRandom(n) {
  const randomNumbers = []
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 11)
    randomNumbers.push(randomNumber)
  }
  return randomNumbers
}
const numberOfRandomNumbers = 5
const randomArray = giveMeRandom(numberOfRandomNumbers)
console.log(randomArray)*/
