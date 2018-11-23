let kg = document.getElementById('kg').value;
kg = parseInt(kg).toFixed(2);
let count = document.getElementById('money').value;
count = parseInt(count).toFixed(2);
let display = document.getElementById('display');
const button = document.querySelector('button');

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
        let result = "Відділ: " + this.department + ", полиця: " + this.shelf + ", місце: " + this.place;
        return  result
    }

    toWeigh(kg){
        this.weight = kg * this.weight;
        return this.weight.toFixed(2) + "кг"
    }
    
    toBuy(count){
        this.price = count * this.price; 
        return this.price.toFixed(2) + 'грн'
    }
}

const apple = new Goods({
    price: 3,
    weight: 0.07,
    department: "фрукти",
    shelf: 1,
    place: 1
});

const orange = new Goods({
    price: 4,
    weight: 0.11,
    department: "фрукти",
    shelf: 1,
    place: 2
});
const tangerine = new Goods({
    price: 3.5,
    weight: 0.030,
    department: "фрукти",
    shelf: 1,
    place: 3
});

const grapefruit = new Goods({
    price: 4.1,
    weight: 0.2,
    department: "фрукти",
    shelf: 1,
    place: 4
});

const ananas = new Goods({
    price: 40.5,
    weight: 1.2,
    department: "фрукти",
    shelf: 2,
    place: 1
});


const coconut = new Goods({
    price: 50.5,
    weight: 0.8,
    department: "фрукти",
    shelf: 2,
    place: 2
});


const kiwi = new Goods({
    price: 3,
    weight: 0.05,
    department: "фрукти",
    shelf: 2,
    place: 3
});


const grape = new Goods({
    price: 30.75,
    weight: 1,
    department: "фрукти",
    shelf: 2,
    place: 4
});


const potatoe = new Goods({
    price: 5.5,
    weight: 1,
    department: "овочі",
    shelf: 1,
    place: 1
});

const carrot = new Goods({
    price: 2.8,
    weight: 1,
    department: "овочі",
    shelf: 1,
    place: 2
});

const beetroot = new Goods({
    price: 3.8,
    weight: 1,
    department: "овочі",
    shelf: 1,
    place: 3
});

const onion = new Goods({
    price: 2.2,
    weight: 1,
    department: "овочі",
    shelf: 1,
    place: 4
});

const buckwheat = new Goods({
    price: 12.95,
    weight: 1,
    department: "крупи",
    shelf: 1,
    place: 1
});

const fig = new Goods({
    price: 15,
    weight: 1,
    department: "крупи",
    shelf: 1,
    place: 2
});

const oatmeal = new Goods({
    price: 11.25,
    weight: 1,
    department: "крупи",
    shelf: 1,
    place: 3
});




