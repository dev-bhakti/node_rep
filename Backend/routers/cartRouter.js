
const express = require('express');
const cartRouter = express.Router();

// Example pizzas catalog (replace with DB or actual source)
const pizzas = [
  { id: 1, pizza_name: 'Margherita', pizza_price: 199 },
  { id: 2, pizza_name: 'Farmhouse',  pizza_price: 299 },
  { id: 3, pizza_name: 'Pepperoni',  pizza_price: 349 },
];

// In-memory cart (per server)
let cart = [];

/**
 * POST /api/cart/add
 * Body: { pizza_id: number, quantity: number }
 * Returns: updated cart
 */
cartRouter.post('/cart/add', (req, res) => {
  try {
    let { pizza_id, quantity } = req.body;

    // Validate required fields
    if (pizza_id === undefined || quantity === undefined) {
      return res.status(400).json({ success: false, message: "pizza_id and quantity are required" });
    }

    // Normalize and validate types
    pizza_id = Number(pizza_id);
    quantity = Number(quantity);

    if (!Number.isInteger(pizza_id) || !Number.isFinite(quantity) || quantity <= 0) {
      return res.status(400).json({ success: false, message: "Invalid pizza_id or quantity" });
    }

    // Ensure pizza exists
    const foundPizza = pizzas.find(p => p.id === pizza_id);
    if (!foundPizza) {
      return res.status(404).json({ success: false, message: "Pizza not found" });
    }

    // Add/update cart
    const existingItem = cart.find(item => item.id === pizza_id);

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.total_price = existingItem.quantity * foundPizza.pizza_price;
    } else {
      cart.push({
        id: foundPizza.id,
        name: foundPizza.pizza_name,
        price: foundPizza.pizza_price,
        quantity,
        total_price: foundPizza.pizza_price * quantity,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Pizza added to cart",
      cart,
    });
  } catch (err) {
    console.error('Error adding to cart:', err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = cartRouter;
