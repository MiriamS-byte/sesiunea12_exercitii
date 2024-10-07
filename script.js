/**
 * Calcularea Sumelor:
 * Definește o funcție numită computeSum care 
 * primește doi parametri și returnează suma acestora.
 * @param {number} a
 * @param {number} b  
 */

function computeSum(a,b){
    return a + b; }
console.log(computeSum(22,35));

/**
 * Determinarea Parității:
 * Scrie o funcție numită isEven care primește un număr 
 * și returnează true dacă numărul este par și false dacă este impar
 */

function isEven(myNumber){
    if(myNumber % 2 !== 0){
        return true;
    }
    return false;
};
console.log(isEven(12));
console.log(isEven(13));

function isOdd(checkedNumber){
    let oddNumber = true;
    if(checkedNumber % 2 == 0) {
        oddNumber = false;
    }         
    return oddNumber;
}
console.log(isOdd(14));
console.log(isOdd(13));

/**
 * Concatenarea Șirurilor de caractere:
 * Creează o funcție numită concatenateStrings care primește 
 * două șiruri și le concatenează, returnând rezultatul.
 */

function concatenateStrings(string1, string2){
    return string1 + string2;
}
const result = concatenateStrings("Alabala", "Portocala");
console.log(result);


/**
 * Verificarea Palindromului:
 * Defineste o funcție numită isPalindrome care primește un șir și
 *  returnează true dacă este palindrom și false în caz contrar.
 */

function isPalindrome(text){
    let reverseText = "";
    for(const letter of text){
        reverseText = letter + reverseText;
    }
    return text === reverseText;
} 
console.log(isPalindrome("aba"));
console.log(isPalindrome("abca"));

/**
 * Generarea unui Număr Aleatoriu:
 * Scrie o funcție numită generateRandomNumber care 
 * returnează un număr aleatoriu întreg între 1 și 100.
 */
function generateRandomNumber(){
    let x = Math.floor((Math.random() * 100) + 1);
    return x;
}
console.log(generateRandomNumber());


/**
 * Calcularea Puterii:
 * Implementează o funcție numită raiseToPower care primește 
 * două numere (baza și exponentul) și returnează rezultatul ridicării la putere.
 */

/**
 * Calcularea Mediei:
 * Creează o funcție numită calculateAverage care primește 
 * un array de numere și returnează media lor.
 */

/**
 * Transformarea în Majusculă:
 * Definește o funcție numită transformToUppercase 
 * care primește un șir și returnează șirul cu toate 
 * literele transformate în majusculă.
 */

/**
 * Verificarea Numărului Prim:
 * Scrie o funcție numită isPrimeNumber care primește un număr 
 * și returnează true dacă este prim și false în caz contrar.
 */

  

