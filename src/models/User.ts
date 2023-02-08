import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const userSchema = new mongoose.Schema({
  fio: { type: String, required: true, unique: true },
  phone_number: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  category: { type: String },
});

// userSchema.plugin(mongoosePaginate);

interface UserDocument extends mongoose.Document {}

export default mongoose.model('User', userSchema);
