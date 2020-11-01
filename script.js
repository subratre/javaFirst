
const friends = ['manoj', 'sukanta', 'niranjan'];
const freindObj = {

    name: 'subrat',
    phone: 9937886930,
    email: 'subrat.nbc@gmail.com'
}
const jonas = {

    firstName: 'subrat',
    lastName: 'panda',
    age: 29 - 10,
    freinds: friends,
    freindObj
}

console.log(jonas);

console.log(jonas.firstName);
console.log( jonas['first' + 'Name'] );
const intrestedIn = 'two';
console.log(jonas[intrestedIn]);
jonas.location = 'bhubaneswar';
console.log(jonas);
jonas['twitter'] = '@subrat';

console.log(jonas);


const resturant = {

    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Fiernze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Oraginc'],
    starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex)
    {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    openingHours: {

        thu:{
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, //open 24 hours
            close: 24,
        }
    },
    orderDelivery: function({ starterIndex, mainIndex, address, time})
    {
        console.log(
            `Ordered Received! ${this.starterMenu[starterIndex]} and ${ this.mainMenu[mainIndex]}`
        );
    }
};
 

resturant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
})
console.log(resturant);

const newarr = ['subrat', 'panda', 'srikanta', 'manoj'];

console.log( newarr[0]);
const [a, b, c, d] = newarr;
console.log(a, b, b, d);

// let [ main, ,secondary] = resturant.categories;
// console.log( main, secondary)
// [main, secondary] = [secondary, main];

// console.log(main, secondary);
const [starter, maincourse] = resturant.order(2, 1);
console.log( starter, maincourse);

const nested = [8, 9, [4,4,6]];

const [aa, bb, [cc ,dd , ee]] = nested;
console.log(aa, bb, cc, dd, ee);

const defa = [8, 9];

const [df, gh, ty = 1] = defa;

console.log(df, gh, ty);

// object destructing

console.log(resturant.openingHours);
const { name: resturantName, categories: cats, starterMenu: startMenu, maintag: mainT = [], openingHours} = resturant;
console.log(resturantName, cats, startMenu, mainT);

let ac = 111;
let af = 589;

const obj = { a: 23, b: 26, c: 30};

({ac, af} = obj);
console.log(ac, af);

const { sat: {open: o, close: ccc} } = openingHours;
console.log(o, ccc);

// spread operator





