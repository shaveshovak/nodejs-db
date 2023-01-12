export const getStudentsQuery = "SELECT * FROM students";
export const getStudentQueryById = "SELECT * FROM students WHERE id = $1";
export const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
export const createStudentQuery = "INSERT INTO students (name, age, email, dob) VALUES  ($1, $2, $3, $4)"; 
export const deleteStudentQuery = "DELETE FROM students WHERE id = $1";
export const updateStudentQuery = "UPDATE students SET name = $1 WHERE id = $2";