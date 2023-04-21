import { model, models, Schema } from "mongoose";

const usersSchema = new Schema({
  email: String,
});

const User = models.User || model("User", usersSchema);

export default User;
 