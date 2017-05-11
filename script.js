var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    },
    applyDiscount: function(discountNumber){
        this.total-=this.total*(discountNumber.discountPercent/100);
    }
};


cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);


function discount( discountPercent) {

    this.discountPercent = discountPercent;
}

var venti = new discount(20);
var dieci = new discount(10);

cashRegister.applyStaffDiscount(venti);

console.log('Your bill is '+cashRegister.total);
