import mongoose from "mongoose";

const todoScheme = new mongoose.Schema({
  content: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    require: true,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
  }
}, { timestamps: true });


const todo = mongoose.models.todos || mongoose.model("todos", todoScheme);

export default todo