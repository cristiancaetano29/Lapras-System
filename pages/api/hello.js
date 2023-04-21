import Connect from "../../utils/mongodb";
import User from "../../model/user";

export default async function handler(req, res) {
  await Connect();
  const { use } = req.query;
  if (use) {
    const id = user.split(",");
    res.json(await User.find({ _id: { $in: id } }).exec());
  } else {
    res.json(await User.find({}).exec());
  }
}
