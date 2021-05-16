import mongoose, { Schema } from "mongoose";

export interface IMessage extends mongoose.Document {
  message: string;
  name: string;
  timestamp: string;
  received: Boolean;
}

const whatsppSchema: Schema = new Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

export default mongoose.model<IMessage>("messagecontents", whatsppSchema);
