import User from "../../models/User";
import mongodb from "../../lib/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  await mongodb();

  switch (method) {
    case "GET":
      try {
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await User.create(req.body);
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
