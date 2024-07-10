// models/User.js

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
  },
  phonenumber: {
    type: Number,
    required: [true, 'Please provide a password'],
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
