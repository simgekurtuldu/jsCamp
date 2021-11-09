let cart = [
    {id:1, productNmae:"Telefon", quantity: 3, unitPrice:"4000"},
    {id:2, productNmae:"Bardak", quantity: 2, unitPrice:"30"},
    {id:3, productNmae:"Kalem", quantity: 1, unitPrice:"20"},
    {id:4, productNmae:"Şarj Cihazı", quantity: 2, unitPrice:"100"},
    {id:5, productNmae:"Kitap", quantity: 3, unitPrice:"30"},
    {id:6, productNmae:"Pot", quantity: 5, unitPrice:"150"},
]

cart.map(product=>{
    console.log(product.productNmae + " : " + product.unitPrice * product.quantity)
})

let total = cart.reduce((acc,product) => acc + product.unitPrice,0) //ürünün birim fiyatını acumulatore ekliyor. ilk değer 0 olarak verildi.
console.log(total)


let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)





function addToCart(sepet) {
    sepet.push({id:7, productNmae:"Kılıf", quantity: 1, unitPrice:"20"}) 
}

addToCart(cart)
console.log(cart)