
const express = require('express');
const db = require('../models')
const cartRouter = express.Router();

// Example pizzas catalog (replace with DB or actual source)
// const pizzas = [
//   { id: 1, pizza_name: 'Margherita', pizza_price: 199 },
//   { id: 2, pizza_name: 'Farmhouse',  pizza_price: 299 },
//   { id: 3, pizza_name: 'Pepperonii',  pizza_price: 349 },
// ];

// In-memory cart (per server)
let cart = [];


cartRouter.get('/cart', (req, res) => {
  res.json({
    items: cart,
    totalItems: cart.reduce((sum, item) => sum + item.qty, 0),
    totalAmount: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  });
});


// cartRouter.delete('/cart/:id', (req, res) => {
//   const { id } = req.params;

//   const index = cart.findIndex(item => item.id === id);
//   if (index === -1) {
//     return res.status(404).json({ message: `Item with id '${id}' not found.` });
//   }

//   // Remove the item
//   const removed = cart.splice(index, 1)[0];

//   // Return remaining items
//   return res.json({
//     message: `Removed '${removed.name}' from cart.`,
//     removedItem: removed,
//     remaining: cart,
//     totalItems: cart.reduce((sum, item) => sum + item.qty, 0),
//     totalAmount: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
//   });
// });

// // Optional: Clear entire cart
// cartRouter.delete('/cart', (req, res) => {
//   cart = [];
//   res.json({ message: 'Cart cleared.', remaining: cart, totalItems: 0, totalAmount: 0 });
// });




// cartRouter.delete('/cart/:pizza_id', async (req, res) => {
//   const { pizza_id } = req.params; // ✅ correct param

//   // If your cart item IDs are numbers, convert:
//   const id = Number(pizza_id); // or parseInt(pizza_id, 10)
//   console.log(pizza_id,'pizz')
  
//   const index = await db.cart_items.findIndex(item => item.id === id);
//   if (index === -1) {
//     return res.status(404).json({ message: `Item with id '${pizza_id}' not found.` });
//   }

//   const removed = db.cart_items.splice(index, 1)[0];

//   return res.json({
//     message: `Removed '${removed.name}' from cart.`,
//     removedItem: removed,
//     remaining: cart,
//     totalItems: cart.reduce((sum, item) => sum + item.qty, 0),
//     totalAmount: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
//   });
// });

/**
 * POST /api/cart/add
 * Body: { pizza_id: number, quantity: number }
 * Returns: updated cart
 */
cartRouter.post('/cart/add', async (req, res) => {
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
    const foundPizza = await db.Pizza.findOne({where:{id: pizza_id}});
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

// cartRouter.delete('/cart/:pizza_id', (req, res) => {
//     const pizzaId = req.params.pizza_id;

//     // Find the index of the item with the matching ID
//   if(!cart || !cart.items){
//     return res.status(404).send({
//       message: "Cart is empty"
//     })
//   }
//     const itemIndex = cart.items.splice(item => item.id === pizzaId);

//     if (itemIndex > -1) {
//         // Remove the item from the array using splice()
//         cart.items.splice(itemIndex, 1);

//         // Optional: Recalculate cart total/bill if necessary
//         // This logic is demonstrated in sources like

//         // Send a success response (e.g., 200 OK or 204 No Content)
//       return  res.status(200).send({ message: `Pizza with ID ${pizzaId} deleted from cart`, updatedCart: cart });
//     } else {
//         // If the item ID is not found, return a 404 Not Found error
//         res.status(404).json({ message: `Pizza with ID ${pizzaId} not found in cart` });
//     }
// });

cartRouter.delete('/cart/:id', async (req, res) => {
  const { id } = req.params;
  const deletedCount = await db.cart_items.destroy({
    where:{id:id}
  });
  if(deletedCount === -1){
    return res.status(404).json({message:`Item with id ${id} not found.`});
  }
    console.log(req.params,'paaa')

  return res.json({
    message:"Item removed successfully"
  });
  
})


module.exports = cartRouter;
