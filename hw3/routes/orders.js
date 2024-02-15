//Jude Reynolds

var express = require('express');
var router = express.Router();

const monthOrders = {
	Jan: [{ topping: "cherry", quantity: 5 }, { topping: "chocolate", quantity: 2 }, { topping: "plain", quantity: 3 }],
	Feb: [{ topping: "cherry", quantity: 20 }, { topping: "chocolate", quantity: 7 }, { topping: "plain", quantity: 1 }],
	Mar: [{ topping: "cherry", quantity: 5 }, { topping: "chocolate", quantity: 3 }, { topping: "plain", quantity: 8 }],
	Apr: [{ topping: "cherry", quantity: 12 }, { topping: "chocolate", quantity: 9 }, { topping: "plain", quantity: 0 }],
	May: [{ topping: "cherry", quantity: 1 }, { topping: "chocolate", quantity: 6 }, { topping: "plain", quantity: 4 }],
	Jun: [{ topping: "cherry", quantity: 3 }, { topping: "chocolate", quantity: 5 }, { topping: "plain", quantity: 7 }],
	Jul: [{ topping: "cherry", quantity: 1 }, { topping: "chocolate", quantity: 14 }, { topping: "plain", quantity: 31 }],
	Aug: [{ topping: "cherry", quantity: 72 }, { topping: "chocolate", quantity: 49 }, { topping: "plain", quantity: 80 }],
	Sep: [{ topping: "cherry", quantity: 56 }, { topping: "chocolate", quantity: 65 }, { topping: "plain", quantity: 0 }],
	Oct: [{ topping: "cherry", quantity: 0 }, { topping: "chocolate", quantity: 0 }, { topping: "plain", quantity: 0 }],
	Nov: [{ topping: "cherry", quantity: 11 }, { topping: "chocolate", quantity: 11 }, { topping: "plain", quantity: 11 }],
	Dec: [{ topping: 'cherry', quantity: 1 }, { topping: 'chocolate', quantity: 2 }, { topping: 'plain', quantity: 3 }],
};
// Larger list of orders


const temp = [{ topping: "cherry", quantity: 5 }, { topping: "chocolate", quantity: 2 }, { topping: "plain", quantity: 3 }];

/* GET orders listing. */
router.post('/', (req, res) => {
	const { month } = req.body;
	const orders = monthOrders[month] || [];
	res.json(temp);
});

module.exports = router;