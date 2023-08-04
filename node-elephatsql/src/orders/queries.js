export const getQueriesQuery = "SELECT * FROM orders";
export const getOrderQueryById = "SELECT * FROM orders WHERE id = $1";
export const createOrderQuery = "INSERT INTO orders (price, date, user_id) VALUES  ($1, $2, $3)"; 
export const deleteOrderQueryById = "DELETE FROM orders WHERE id = $1";
export const updateOrderQueryById = "UPDATE orders SET price = $1, date = $2, user_id = $3 WHERE id = $4";