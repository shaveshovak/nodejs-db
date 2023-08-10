import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  first_name: {
    type: String,
  },
  email: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;