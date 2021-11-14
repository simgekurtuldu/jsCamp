//JS type safe değildir.
let dolorDun = 9.20
let dolarBugun=9.30
{
    let dolarBugun=9.10
}
console.log(dolarBugun)

const euroDun =11.2
//euroDun = 11
console.log(euroDun)

let konutKredileri = ["Konut kredisi" , "Emlak Konut Kredisi","Kamu Konut Kredisi"]
for (let i = 0; i < konutKredileri.length; i++) {
    console.log(konutKredileri[i])
    
}
//console.log(konutKredileri)
// js de bir değişkene fonksiyon atanabilir. Dolayısıyla fonksiyon ismi vermeye gerek yoktur.

//rest -> istediğimiz kadar parametre gönderiyoruz, array olarak tutulur
let showProducts=function (id,...products) {
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Muz"])


//spread(ayrıştırmak) -> elimizdeki bir array'ı ayrıştırıyoruz
let points= [1,2,4,5,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//destructuring(parçalamak) -> elimizdeki array'in değerlerini değişkenlere atamayı sağlar
let populations = [10000,20000,30000,[40000,100000]]
let[small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)

