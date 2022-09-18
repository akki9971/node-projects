const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/mylocaldatabase";

// mongoose.connect("mongodb://localhost:27017/MyLocalDatabase/Mens100mRecord",{
mongoose.connect(mongoURI, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection to Database established successfully");
}).catch((e) => {
    console.log("error occured at connect to Database",e);
})
