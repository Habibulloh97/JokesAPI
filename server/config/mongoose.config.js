const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost/jokes",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("I have found the mongoose"))
    .catch(err => console.log("Oh no! I lost the mongoose!", err))
    

