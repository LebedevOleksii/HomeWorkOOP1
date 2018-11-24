let kg = document.getElementById('kg').value;
kg = parseInt(kg).toFixed(2);
let count = document.getElementById('money').value;
count = parseInt(count).toFixed(2);
let display = document.getElementById('display');
const button = document.querySelector('button');
const selectBox = document.getElementById('select-box');
class Product {
    constructor(options) {
        let {
            name,
            price,
            weight,
            department,
            shelf,
            id,
            place
        } = options;
        this.name = name;
        this.id = getRandomInt(100, 999);
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

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  
var products = [];


function addProductToList(product){
    products.push(product);
    const option = document.createElement('option');
    option.id = product.id;
    option.text = product.name;
    selectBox.add(option);
}

function onChangeProduct(products) {
    var idProduct = selectBox.options[selectBox.selectedIndex].id;
    var item = products.find(item => item.id == idProduct);
    return console.log(item.name)
    
    // arr.filter(function(a){ return a.id == idProduct })[0]
}


// button.addEventListener('click', function(){
//     onChangeProduct(products)
//     console.log(item.name)
// })


const apple = new Product({
    name: 'Яблуко',
    price: 3,
    weight: 0.07,
    department: "фрукти",
    shelf: 1,
    place: 1
});

const orange = new Product({
    name: 'Апельсин',
    price: 4,
    weight: 0.11,
    department: "фрукти",
    shelf: 1,
    place: 2
});
const tangerine = new Product({
    name: 'Мандарин',
    price: 3.5,
    weight: 0.030,
    department: "фрукти",
    shelf: 1,
    place: 3
});

const grapefruit = new Product({
    name: 'Грейфрут',
    price: 4.1,
    weight: 0.2,
    department: "фрукти",
    shelf: 1,
    place: 4
});

const ananas = new Product({
    name: 'Ананас',
    price: 40.5,
    weight: 1.2,
    department: "фрукти",
    shelf: 2,
    place: 1
});


const coconut = new Product({
    name: 'Кокос',
    price: 50.5,
    weight: 0.8,
    department: "фрукти",
    shelf: 2,
    place: 2
});


const kiwi = new Product({
    name: 'Ківі',
    price: 3,
    weight: 0.05,
    department: "фрукти",
    shelf: 2,
    place: 3
});


const grape = new Product({
    name: 'Виноград',
    price: 30.75,
    weight: 1,
    department: "фрукти",
    shelf: 2,
    place: 4
});


const potatoe = new Product({
    name: 'Картопля',
    price: 5.5,
    weight: 1,
    department: "овочі",
    shelf: 1,
    place: 1
});

const carrot = new Product({
    name: 'Морква',
    price: 2.8,
    weight: 1,
    department: "овочі",
    shelf: 1,
    place: 2
});

const beetroot = new Product({
    name: 'Буряк',
    price: 3.8,
    weight: 1,
    department: "овочі",
    shelf: 1,
    place: 3
});

const onion = new Product({
    name: 'Цибуля',
    price: 2.2,
    weight: 1,
    department: "овочі",
    shelf: 1,
    place: 4
});

const buckwheat = new Product({
    name: 'Гречка',
    price: 12.95,
    weight: 1,
    department: "крупи",
    shelf: 1,
    place: 1
});

const fig = new Product({
    name: 'Рис',
    price: 15,
    weight: 1,
    department: "крупи",
    shelf: 1,
    place: 2
});

const oatmeal = new Product({
    name: 'Вівсянка',
    price: 11.25,
    weight: 1,
    department: "крупи",
    shelf: 1,
    place: 3
});

addProductToList(apple);
addProductToList(orange);
addProductToList(tangerine);
addProductToList(grapefruit);
addProductToList(ananas);
addProductToList(coconut);
addProductToList(kiwi);
addProductToList(grape);
addProductToList(potatoe);
addProductToList(carrot);
addProductToList(beetroot);
addProductToList(onion);
addProductToList(buckwheat);
addProductToList(fig);
addProductToList(oatmeal);

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

