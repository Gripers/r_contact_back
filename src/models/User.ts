import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fio: { type: String, required: true, unique: true },
  phone_number: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  tags: [{ type: String, unique: true }],
});

export default mongoose.model('User', userSchema);
