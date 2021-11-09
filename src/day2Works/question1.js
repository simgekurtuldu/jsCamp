//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
export function findPrimeNumber(bool,...numbers){
      let primeList =[]
      let notPrimeList =[]
      for(let i=0;i<numbers.length;i++){
        let prime =true
        if(numbers[i]<2) prime=false
        else{
          for(let j=2;j<numbers[i];j++){
            if(numbers[i]%j ==0 ){
              prime=false 
              break
            }
            } 
        } 
        if(prime)primeList.push(numbers[i])
        else notPrimeList.push(numbers[i])
      }
      if(bool) return primeList
      else return notPrimeList
}
//console.log("Asal sayılar: " + findPrimeNumber(true,1,2,5,-1,23,151,3,5,8)) 
//console.log("Asal olmayan sayılar: " + findPrimeNumber(false,1,2,5,-1,23,151,3,5,8)) 
 



