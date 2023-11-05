const mongoose = require("mongoose");

const mondbUrl = "mongodb+srv://ajjubanna9577:ajayecommerce@cluster0.gjw6c7h.mongodb.net/E-Commerce?retryWrites=true&w=majority";

const connectDb = () => {
    // return mongoose.connect(mondbUrl);

    mongoose.connect(mondbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Database Connected');
        })
        .catch(e => {
            console.log(e.message);
        });
}



module.exports = { connectDb }