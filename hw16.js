
let productWeigh = document.getElementById('weigh');
let productPrice = document.getElementById('price');
let productPlace = document.getElementById('place');
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
        return "Вага: " + (this.weight * kg).toFixed(3) + "кг";
    }
    
    toBuy(count){
        return "Ціна: " + this.price +" грн/1 кг" + ", до сплати: " + (this.price * count).toFixed(2) +  "грн";
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
    return item
}
button.addEventListener('click', function(item){
    productPlace.innerText = onChangeProduct(products).toFind();
    let kg = document.getElementById('kg').value ;
    if(kg > 0) {
        productWeigh.innerText = onChangeProduct(products).toWeigh(kg);
    } else {
        productWeigh.innerText = "";
    }
    let count = document.getElementById('count').value;
    if(count > 0) {
        productPrice.innerText = onChangeProduct(products).toBuy(count);
    } else {
        productPrice.innerText = "";
    }
});


const apple = new Product({
    name: 'Яблуко',
    price: 23.10,
    weight: 0.18,
    department: "фрукти",
    shelf: 1,
    place: 1
});

const orange = new Product({
    name: 'Апельсин',
    price: 33.70,
    weight: 0.25,
    department: "фрукти",
    shelf: 1,
    place: 2
});
const tangerine = new Product({
    name: 'Мандарин',
    price: 31.25,
    weight: 0.08,
    department: "фрукти",
    shelf: 1,
    place: 3
});

const grapefruit = new Product({
    name: 'Грейфрут',
    price: 41.45,
    weight: 0.4,
    department: "фрукти",
    shelf: 1,
    place: 4
});

const ananas = new Product({
    name: 'Ананас',
    price: 70.50,
    weight: 2,
    department: "фрукти",
    shelf: 2,
    place: 1
});


const coconut = new Product({
    name: 'Кокос',
    price: 90.50,
    weight: 2.3,
    department: "фрукти",
    shelf: 2,
    place: 2
});


const kiwi = new Product({
    name: 'Ківі',
    price: 32.25,
    weight: 0.11,
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
    weight: 0.06,
    department: "овочі",
    shelf: 1,
    place: 1
});

const carrot = new Product({
    name: 'Морква',
    price: 2.80,
    weight: 0.10,
    department: "овочі",
    shelf: 1,
    place: 2
});

const beetroot = new Product({
    name: 'Буряк',
    price: 3.80,
    weight: 0.25,
    department: "овочі",
    shelf: 1,
    place: 3
});

const onion = new Product({
    name: 'Цибуля',
    price: 2.20,
    weight: 0.1,
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

