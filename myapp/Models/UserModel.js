const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema(
    {
        username: { type: String, require: true, unique: true },
        password: { type: String, require: true, unique: true },
        role: { type: String, default: "user" },
        status: { type: String, default: "active" }
    },
    { timestamps: { createdAt: "createAt" } }
)

module.exports = mongoose.model("User", UserModel);
