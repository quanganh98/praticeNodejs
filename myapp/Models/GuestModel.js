const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuestModel = new Schema(
    {
        account: { type: String, required: true, unique: true },
        guestName: { type: String, required: true },
        idNumber: { type: Number, required: true, unique: true },
        phoneNumber: { type: String, required: true },
        address: { type: String, required: true }
    },
    { timestamps: { createdAt: "createAt" } }
)

module.exports = mongoose.model("Guest", GuestModel);