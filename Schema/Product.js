const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    Activity : { type: String, required:true }
});
module.exports = mongoose.model("texts", productSchema);


