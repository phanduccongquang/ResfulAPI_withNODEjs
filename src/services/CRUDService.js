const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
}
const getUserbyID = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId]);

    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const updateUserByID = async (email, name, city, userID) => {
    const [results] = await connection.query(
        `UPDATE Users
        SET email = ?,name = ?, city= ?
        WHERE id = ?
        `
        , [email, name, city, userID]
    );
}
const deleteUserById = async (id) => {
    const [results] = await connection.query(
        `DELETE FROM Users WHERE id=?;`
        , [id]
    );
}
module.exports = {

    getAllUsers, getUserbyID, updateUserByID, deleteUserById

}
