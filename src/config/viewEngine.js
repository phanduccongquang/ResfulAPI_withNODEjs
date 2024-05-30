const path = require('path');
const express = require('express');
const configViewEngine = (app) => {
    //config template engine
    app.set('views', path.join('./src', 'views'));
    //path.join(__dirname lấy đường dẫn tại thư mục mà nó đang đứng
    app.set('view engine', 'ejs');
    //config staic file để hiển thị được file động hiển thị cho client 
    //config staic file để hiển thị được file động hiển thị cho client 
    app.use(express.static(path.join('./src', 'public')));
};
module.exports = configViewEngine;