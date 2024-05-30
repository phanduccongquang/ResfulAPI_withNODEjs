const express = require('express');
require('dotenv').config();
const path = require('path');
const configViewEngine = require('./src/config/viewEngine');
const connection = require('./src/config/database');
const webRoutes = require('./src/routes/web');
const app = express();
//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true }))

//config để dùng được .env
//console.log(process.env).PORT;
const port = process.env.PORT || 8888;
//dùng .env,||8888 được dùng nếu PORT nhận undifine thì server vẫn chạy trên cổng 8888


//config template engine
configViewEngine(app);

app.use('/', webRoutes);
//test conection

// connection.query(
//     ' select * from Users',
//     function (err, results, fields) {
//         console.log("results", results);

//     }
// )


app.listen(port, () => {
    console.log(`chayj tren cong s ${port}`);
});
