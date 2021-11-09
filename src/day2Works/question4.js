//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
import {findPrimeNumber} from './question1.js';
let list=[]
for(let i=3;i<1000;i++) list.push(i)
console.log("Asal sayılar: " + findPrimeNumber(true,...list))