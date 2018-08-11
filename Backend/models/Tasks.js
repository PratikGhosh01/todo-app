// importing mongoose module
const mongoose = require("mongoose")
// import schema 
const Schema = mongoose.Schema



let todoSchema = new Schema(
    {
        itemId: {
            type: String,
            unique: true
        },
        name: {
            type: String,
            default: ""
        }
    }
)
mongoose.model("todoList", todoSchema)

