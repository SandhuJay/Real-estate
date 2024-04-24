
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
