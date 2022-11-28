import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  disliked: Boolean,
  dislikes: Number,
  handle: String,
  image: String,
  time: String,
  username: String
}, {collection: 'tuits'});
export default schema;