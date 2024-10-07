import { Schema, Document, model, ObjectId } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  thoughts: ObjectId[];
  friends: ObjectId[];
  friendCount: number; // virtual property
}

// define user schema
const userSchema = new Schema<IUser>(
 {
  username: String,
  email: String,
  thoughts: [
   {
    type: Schema.Types.ObjectId,
    ref: "Thought",
   },
  ],
  friends: [
   {
    type: Schema.Types.ObjectId,
    ref: "User",
   },
  ],
  },
  {
   toJSON: {
    virtuals: true,
    getters: true,
   },
   id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model<IUser>("User", userSchema);

export default User;
