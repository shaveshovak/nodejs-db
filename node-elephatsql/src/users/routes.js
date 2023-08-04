import express from "express";
import { getData, createData, getDataById, deleteDataById, updateData, getDataSubdata, checkDataSubdata } from "../../shared/controllers.js";
import { getUsersQuery, createUserQuery, getUserQueryById, deleteUserQueryById, updateUseryQueryById, getOrdersQuery, checkOrdersQuery } from "./queries.js";
import { pool } from "../../db.js";

const router = express.Router(); 

router.get('/', (req, res) => {
    getData(req, res, getUsersQuery);
});

router.get('/:id', (req, res) => {
    getDataById(req, res, getUserQueryById);
});

router.post('/', (req, res) => {
    const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        active: req.body.active,
    };
    createData(req, res, createUserQuery, data);
}); 

router.delete('/:id', (req, res) => {
    deleteDataById(req, res, deleteUserQueryById);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    // Get validation errors (if any)
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // If there are validation errors, respond with the error messages
        return res.status(400).json({ errors: errors.array() });
    }

    const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        active: req.body.active,
    };
    updateData(req, res, updateUseryQueryById, data, id);
}); 

// User route to get all orders linked to a specific user
router.get('/:id/orders', (req, res) => {
    const userId = parseInt(req.params.id);

    getDataSubdata(userId, (error, orders) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error fetching orders' });
        }

        if (orders.length === 0) {
            // If no orders are found for the user, you can respond with an appropriate message
            return res.status(404).json({ message: 'No orders found for this user' });
        }

        // If orders are found, send them as a response
        res.status(200).json(orders);
    }, getOrdersQuery);
});

// User route to set a user as inactive if they have never ordered
router.put('/:id/check-inactive', (req, res) => {
    const userId = parseInt(req.params.id);

    checkDataSubdata(userId, (error, orderCount) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error checking user orders' });
        }

        // If the user has no orders (orderCount === 0), set the user as inactive
        if (orderCount === 0) {
            const updateUserQuery = 'UPDATE users SET active = false WHERE id = $1';
            pool.query(updateUserQuery, [userId], (updateError) => {
                if (updateError) {
                    console.error(updateError);
                    return res.status(500).json({ error: 'Error updating user status' });
                }
                // Return a success message if the user was set as inactive
                return res.status(200).json({ message: 'User is now inactive' });
            });
        } else {
            // Return a message indicating that the user already has orders
            return res.status(200).json({ message: 'User has orders, status unchanged' });
        }
    }, checkOrdersQuery);
});

export default router;