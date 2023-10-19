const mongoose = require('mongoose');
const BASE_URL = process.env.NODE_ENVIRONMENT === 'development'
                    ?   `mongodb://0.0.0.0:27017/${process.env.DEVELOPMENT_MONGO_DB_NAME}`
                    : "mongodb+srv://root:root@cluster0.9ch90f3.mongodb.net/books" ;

mongoose.connect(BASE_URL)
.then(response => {
    console.log("DATABASE connection successfully");
})
.catch(err => {
    console.log("DATABASE connection failed");
})
