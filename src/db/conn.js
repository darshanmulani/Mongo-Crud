const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/users_api" ,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( ()=>{
    console.log("connection succuesfull....");
} )
.catch( (err)=>{
    console.log(err);
} );