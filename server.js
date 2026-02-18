require("dotenv").config()
const app = require("./src/app")
const connectToDatabas = require("./src/config/database")

connectToDatabas()

app.listen(3000,() =>{
    console.log("server is running on port 3000");
    
})