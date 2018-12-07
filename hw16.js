
let productWeigh = document.getElementById('weigh');
let productPrice = document.getElementById('price');
let productPlace = document.getElementById('place');
const button = document.getElementById('button');
const basketButton = document.getElementById('basket-button');
const iconButton = document.getElementById('icon-basket');
const selectBox = document.getElementById('select-box');
const showLastSum = document.getElementById('last-sum');
const resetButton = document.getElementById('reset-button');
const tableWrapper = document.getElementById('table-wrapper')
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

    toFind() {
        let result = "Відділ: " + this.department + ", полиця: " + this.shelf + ", місце: " + this.place;
        return  result
    }

    toWeigh(kg) {
        return   "Вага: " + (this.weight * kg).toFixed(3) + "кг";    
    }
    
    toBuy(count) {
        return  "Ціна: " + this.price + " грн/1 кг" + ", до сплати: " + (this.price * count).toFixed(2) +  "грн";
    }
    toWeighSum(kg, count) {
        if (kg > 0) {
            return (this.weight * kg).toFixed(3);
        } else if (count > 0) {
            return (1 * count);
        }

    }
    toBuySum(count, kg) {
        if (kg > 0) {
            return (this.price * (this.weight * kg)).toFixed(2);
        } else if(count > 0) {
            return (this.price * count).toFixed(2);
        }
    }
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let products = [];


const addProductToList = (product) => {
    products.push(product);
    const option = document.createElement('option');
    option.id = product.id;
    option.text = product.name;
    selectBox.add(option);
}

const onCangeReset = () => {
    document.getElementById('kg').value = "";
    document.getElementById('count').value = "";
}

const onChangeProduct = (products) => {
    const idProduct = selectBox.options[selectBox.selectedIndex].id;
    const item = products.find(item => item.id == idProduct);
    return item
};

let sum = [];

const getSum = (item) => {
    let count = document.getElementById('count').value;
    let kg = document.getElementById('kg').value;
    sum.push(item.toBuySum(count, kg));
}


const getLastSum = (sum) => {
    showLastSum.innerHTML = getSum(item).reduce(function(item, current)  {
          return +item + +current
    });
    showLastSum.innerHTML += "грн";
}


const renderBasket = (item, kg, count) => {
    const tableBasket = document.createElement('table'); 
    tableBasket.innerHTML += 
    `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}грн/кг</td>
            <td>${item.toWeighSum(kg, count)}кг</td>
            <td>${item.toBuySum(count, kg)}грн</td>
        </tr>
    `
    tableWrapper.append(tableBasket);
    getLastSum(sum);
}

button.addEventListener('click', function(item) {
    productPlace.innerText = onChangeProduct(products).toFind();
    let count = document.getElementById('count').value;
    let kg = document.getElementById('kg').value ;
    if (kg > 0) {
        productWeigh.innerText = onChangeProduct(products).toWeigh(kg);
    } else {
        productWeigh.innerText = "";
    }
    
    if (count > 0) {
        productPrice.innerText = onChangeProduct(products).toBuy(count);
    } else {
        productPrice.innerText = onChangeProduct(products).toBuySum(count, kg);
    }
});

basketButton.addEventListener('click', function() {
    let count = document.getElementById('count').value;
    let kg = document.getElementById('kg').value ;
    getSum(onChangeProduct(products))
    renderBasket(onChangeProduct(products), kg, count)
});

iconButton.addEventListener('click', function() {
    document.getElementById('basket-wrapper').classList.toggle('basket-hide');
    iconButton.style.opacity = .4;  
        setTimeout(() => {
            iconButton.style.opacity = .8;
        },100);
});

resetButton.addEventListener('click', function() {
    tableWrapper.innerHTML = showLastSum.innerHTML = "";
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
    weight: 0.40,
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
    weight: 2.30,
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
    price: 5.50,
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
    weight: 0.10,
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
    price: 15.00,
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

