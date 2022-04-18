const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Darshan:sparkle@darshan.rsyjh.mongodb.net/Angular-CRUD?retryWrites=true&w=majority" ,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( ()=>{
    console.log("connection succuesfull....");
} )
.catch( (err)=>{
    console.log(err);
} );