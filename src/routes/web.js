const express = require('express');
const router = express.Router();
const { getHomepage, getABC, createUser, CreatePage, updateUser, postUpdateUser, postDeleteUser, postMoveUser } = require('../controllers/homeController')

router.get('/', getHomepage);

router.post('/create-user', createUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postMoveUser);




router.get('/create', CreatePage)
router.get('/update/:id', updateUser)


router.get('/abc', getABC);

module.exports = router;