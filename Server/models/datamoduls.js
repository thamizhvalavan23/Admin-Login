import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  id:{type:Number , required : true},
    email:{type : String , required : true},
    first_name:{type : String , required : true},
    last_name:{type : String , required : true},
    avatar: {type : String , required : true} // Store the image URL
  });
  
 const User = mongoose.model("User", UserSchema);



 export default User;