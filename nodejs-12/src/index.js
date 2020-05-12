function getShoppingCart(ids, productsList) {
	let products = []
	let categories = []
	let promotion = ""
	let response = []
	ids.forEach(id => {
		productsList.forEach(product => {
			if(product.id === id){
				if (!categories.includes(product.category)) categories.push(product.category)
				products.push(product)
				response.push({'name': product.name, 'category': product.category})
			}
		})
	});

	switch (categories.length){
		case 1: promotion = "SINGLE LOOK"; break;
		case 2: promotion = "DOUBLE LOOK"; break;
		case 3: promotion = "TRIPLE LOOK"; break;
		case 4: promotion = "FULL LOOK"; break;
	}
	let totalPriceDiscount = 0
	let totalPrice = 0
	let totalDiscount = 0
	let percentageDiscount = 0
	products.map(product => {
		let includePromotion = false
		totalPrice += product.regularPrice
		product.promotions.forEach(look =>{
			if(look.looks.includes(promotion)){
				totalPriceDiscount += look.price
				includePromotion = true
			}
		})

		if(!includePromotion) totalPriceDiscount += product.regularPrice
	})

	totalDiscount = totalPrice - totalPriceDiscount
	percentageDiscount = (totalDiscount * 100) / totalPrice

	return {
		'products': response,
		'promotion': promotion,
		'totalPrice': totalPriceDiscount.toFixed(2),
		'discountValue': totalDiscount.toFixed(2),
		'discountPercentage': percentageDiscount.toFixed(2) + '%'
	};
}

module.exports = { getShoppingCart };
