let kg = document.getElementById('kg').value;
let count = document.getElementById('money').value;
class Goods {
    constructor(options) {
        let {
            price,
            weight,
            department,
            shelf,
            place
        } = options;
        this.price = price;
        this.weight = weight;
        this.department = department;
        this.shelf = shelf;
        this.place = place;
    }

    toFind(){
        return "Відділ: " + this.department + ", полиця: " + this.shelf + ", місце: " + this.place 
    }

    toWeigh(kg){
        this.weight = kg * this.weight
        return this.weight + "кг"
    }
    
    toBuy(count){
        this.price = (count * this.price);
        return this.price + "грн";
        
    }

}

const Apple = new Goods({
    price: 3,
    weight: 0.15,
    department: "фрукти",
    shelf: 1,
    place: 1
});

const Fig = new Goods({
    price: 15,
    weight: 1,
    department: "крупи",
    shelf: 1,
    place: 1
})