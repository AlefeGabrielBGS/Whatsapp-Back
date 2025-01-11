import { User } from '../Models/User.js'

export default async function AuthController (req, res) {
  const user  = new User(req.body);
  await user.save();
  return user;
}