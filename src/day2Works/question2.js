// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)
function divisorsSum(number){
    let total=0
    for(let i=1;i<number;i++){
        if(number%i==0){
            total+=i
        }
    }return total
}

function findFriendsNumbers(number1,number2) {
    let total1=divisorsSum(number1)
    let total2=divisorsSum(number2)
    if(total1==number2 && total2==number1){
        console.log(number1 + " ve " + number2 + " arkadaş sayılar")
    }
    else{
        console.log(number1 + " ve " + number2 + " arkadaş sayılar değil")
    }
    
}
findFriendsNumbers(24,220)