export const getStudentsQuery = "SELECT * FROM students";
export const getStudentQueryById = "SELECT * FROM students WHERE id = $1";
export const createStudentQuery = "INSERT INTO students (name, lastName, age, email) VALUES  ($1, $2, $3, $4)"; 
export const deleteStudentQuery = "DELETE FROM students WHERE id = $1";
export const updateStudentQuery = "UPDATE students SET name = $1, age = $2, email = $3, lastname = $4 WHERE id = $5";