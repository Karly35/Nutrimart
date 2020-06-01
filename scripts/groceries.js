// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true,
		vegetarianGlutenFree: true

	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: false,
		vegetarianGlutenFree: false
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: true,
		vegetarianGlutenFree: false
	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		price: 2.19,
		organic: true,
		vegetarianGlutenFree: true
	},
	{
		name: "cereals",
		vegetarian: false,
		glutenFree: false,
		price: 2.99,
		organic: false,
		vegetarianGlutenFree: false
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		price: 1.99,
		organic: false,
		vegetarianGlutenFree: false
	},
	{
		name: "eggs",
		vegetarian: false,
		glutenFree: true,
		price: 5.99,
		organic: true,
		vegetarianGlutenFree: false
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: true,
		price: 12.99,
		organic: false,
		vegetarianGlutenFree: true
	},
	{
		name: "milk",
		vegetarian: false,
		glutenFree: true,
		price: 4.99,
		organic: false,
		vegetarianGlutenFree: false
	},
	{
		name: "greek yogurt",
		vegetarian: true,
		glutenFree: true,
		price: 6.19,
		organic: true,
		vegetarianGlutenFree: true
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let product_price = [];
	let result = [];
	for (let i=0; i<prods.length; i+=1) {
		
		if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarianGlutenFree == true)){
			product_names.push(prods[i].name);
			product_price.push(prods[i].price);
			result = product_names.map((e, i) => e+ " $" + product_price[i]);
		}
		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			product_price.push(prods[i].price); 
			result = product_names.map((e, i) => e+ " $" + product_price[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
			product_price.push(prods[i].price);
			result = product_names.map((e, i) => e+ " $" + product_price[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
			product_price.push(prods[i].price);
			result = product_names.map((e, i) => e+ " $" + product_price[i]);
		}
	}
	return result;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
