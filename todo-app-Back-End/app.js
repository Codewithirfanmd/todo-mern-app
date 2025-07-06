const express = require("express")
const path = require("path")
const rootDir = require("./utils/path")
const { errorHandler } = require("./controller/error")
const mongoose = require("mongoose")
const cors = require("cors")
const todoRouter = require("./routes/todoRouter")


const DB_PATH = "mongodb+srv://root:root@procodrr.fqbnxqe.mongodb.net/todo?retryWrites=true&w=majority&appName=ProCodrr"



const app = express()


app.use(express.urlencoded())
app.use(express.static(path.join(rootDir, "public")))

app.use(cors())
app.use(express.json())

app.use(todoRouter)


app.use(errorHandler)


mongoose.connect(DB_PATH).then(()=> {
    app.listen(3000, ()=> {
        console.log("the server has begun at: http://localhost:3000")
    })
}).catch(err=> {
    console.log("Error while connecting", err)
})
