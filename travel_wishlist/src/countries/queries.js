export const getCountriesQuery = "SELECT * FROM countries";
export const getCountryQueryById = "SELECT * FROM countries WHERE id = $1";
export const createCountryQuery = "INSERT INTO countries (name, alpha2Code, alpha3Code) VALUES  ($1, $2, $3)"; 
export const deleteCountryQuery = "DELETE FROM countries WHERE id = $1";
export const updateCountryQuery = "UPDATE countries SET name = $1, alpha2code = $2, alpha3code = $3 WHERE id = $4";