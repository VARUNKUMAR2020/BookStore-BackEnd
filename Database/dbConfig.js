const mongoose = require('mongoose');
const BASE_URL ="mongodb+srv://root:root@cluster0.9ch90f3.mongodb.net/"

mongoose.connect(BASE_URL)
.then(response => {
    console.log("DATABASE connection successfully");
})
.catch(err => {
    console.log("DATABASE connection failed");
})
