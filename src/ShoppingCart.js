class ShoppingCart {
	constructor() {
		this.items = [];
	}

	getItems() {
		return this.items;
	}
	addItem(name, quantity, pricePerUnit) {
		return this.items.push({ name, quantity, pricePerUnit });
	}

	total() {
		const totalCost = this.items.reduce((acc, currentValue) => {
			//console.log('acc is', acc);
			//console.log('curval is', curValue.quantity);
			return acc + currentValue.pricePerUnit * currentValue.quantity;
		}, 0);
		return totalCost;
	}

	clear() {
		return (this.items.length = 0);
	}
}

module.exports = ShoppingCart;
