export const getUsersQuery = "SELECT * FROM users";
export const getUserQueryById = "SELECT * FROM users WHERE id = $1";
export const createUserQuery = 'INSERT INTO users (first_name, last_name, age, active) VALUES ($1, $2, $3, $4)';
export const deleteUserQueryById = "DELETE FROM users WHERE id = $1";
export const updateUseryQueryById = "UPDATE users SET first_name = $1, last_name = $2, age = $3, active = $4 WHERE id = $5";
export const getOrdersQuery = 'SELECT * FROM orders WHERE user_id = $1';
export const checkOrdersQuery = 'SELECT COUNT(*) FROM orders WHERE user_id = $1';