const connection = require('../config/database');
const mysql = require('mysql2/promise');
const { getAllUsers, getUserbyID, updateUserByID, deleteUserById } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    // console.log("check ", results);
    let results = await getAllUsers();
    return res.render('home.ejs', { listUser: results });
}
const getABC = (req, res) => {
    // call models
    let user = [];
    connection.query(
        ' select * from Users',
        function (err, results, fields) {
            user = results;
            console.log("results", results);
            console.log("check user", user);
            res.send(JSON.stringify(user));

        }
    )

}
const createUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    //let {email,name,city}= req.body;
    //console.log("email", email, "name", name, "city", city);

    const [results] = await connection.query(
        `INSERT INTO Users (email, name, city)VALUES (?, ?, ?)`
        , [email, name, city]
    );

    console.log(results);
    res.send('create new user');
}

const CreatePage = (req, res) => {
    return res.render('createUser.ejs');
}
const updateUser = async (req, res) => {
    // console.log("check params", req.params);

    const userId = req.params.id;

    let user = await getUserbyID(userId);
    // console.log("check result", results);
    return res.render('update.ejs', { useEdit: user });
}
const postUpdateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userID = req.body.userID;
    //let {email,name,city}= req.body;
    //console.log("email", email, "name", name, "city", city);

    // const [results] = await connection.query(
    //     `UPDATE Users
    //     SET email = ?,name = ?, city= ?
    //     WHERE id = ?
    //     `
    //     , [email, name, city, userID]
    // );

    await updateUserByID(email, name, city, userID);
    // console.log(results);
    // res.send('update new user succeed');
    res.redirect('/');
}
const postDeleteUser = async (req, res) => {
    const userId = req.params.id;

    let user = await getUserbyID(userId);
    res.render('delete.ejs', { useEdit: user });

}
const postMoveUser = async (req, res) => {
    const id = req.body.userID
    await deleteUserById(id);

    // console.log(results);

    res.redirect('/');
}

module.exports = {
    getHomepage, getABC, createUser, CreatePage, updateUser, postUpdateUser, postDeleteUser, postMoveUser

}