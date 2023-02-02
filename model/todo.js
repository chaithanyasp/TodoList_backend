const mongoose=require ("mongoose")

const todoSchema=new mongoose.Schema({
    Activity:{type:String, require:true},
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true })

const todoModel = mongoose.model('Contact', todoSchema)

module.exports = todoModel;