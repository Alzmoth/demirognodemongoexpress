var mongoose = require ('mongoose')
var Costumer = require ('./customer')

mongoose.connect('mongodb://mali:123456a@ds113923.mlab.com:13923/deneme',(error)=>{
    if(!error){
        console.log("baglantıda sıkıntı yok")
    }
} )

/*var customer1 = new Costumer({
    name: "mali",
    city: "Gonya",
    deneme: "hello"
})

customer1.save((error) => {
    if (error) {
        throw error;

    } else
        console.log("costumer kaydedildi")
})*/

Costumer.find({name:'mali'},(error,data)=>{
    if (error) {
        throw error;

    } else
        console.log(data)
}).where('city').equals('Gonya')