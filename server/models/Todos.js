const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const ToDoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: String,
    completed: Boolean
});

ToDoSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("ToDo", ToDoSchema);