
function Car(name, model, price){
    this.name=name;
    this.model=model;
    this.price=price;
    this.calculatePrice=function(vat){
        return this.price*(1+(vat/100));}

};

var Car1=new Car("renault", "megane", 150000);
var Car2=new Car("citroen", "c3", 50000);
var Car3=new Car("citroen", "c4", 70000);
var Car4=new Car("mercedes", "aa", 250000);

console.log(Car1);
console.log(Car2);
console.log(Car3);
console.log(Car4);

// var car= {
//     model: "citroen",
//     color: 'red',
//     weight: '1350',
//     price: 60000, /*netto*/
//     prices: {
//             30: 100000,
//     },
//
//     calculatePrice: calculatePrice
// };
//
//
//     function calculatePrice(vat) {
//         console.log('VAT:' + vat);
//         if (typeof this.price[vat] === 'undefined') {
//             console.log("wykonuje obliczenia");
//             this.price * (1 + (vat / 100));
//         }
//         ;
//         console.log(car);
//         console.log(car.calculatePrice(50));
//         console.log(car.calculatePrice(30));
//         console.log(car.calculatePrice(20));
//     }



//
// var car= {
//     model: “citroen”,
// color: ‘red’,
// weight: ‘1350’,
// price: 60000, /*netto*/
//
//     calculatePrice: calculatePrice
// };
//
//
// function calculatePrice(vat){
//     return this.price*(1+(vat/100));
// };
// console.log(car);
// console.log(car.calculatePrice(50));