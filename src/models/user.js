// models: component'lerde kullanıcıya gösterilen, ya da kullanıcıdan alıp API'ye gönderilen veri tiplerine verilen gelen isim
export default class User {
    constructor(id, firstName, lastName, city) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city

    }
}