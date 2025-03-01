import { User } from '../Models/User.js'
import bcryptjs from 'bcryptjs'
export async function SignUp (req, res)
   { const {name, password, email} = req.body
       bcryptjs.genSaltSync()
       const userRegistered = new User({name:name, password:bcryptjs.hashSync(password),
           email:email

       });
       await userRegistered.save();
       const JwtToken = await res.jwtSign( {
            _id: userRegistered._id,
            name: userRegistered.name,
            email: userRegistered.email
       },
    {
        expiresIn: '31d'
        })
        return JwtToken
     };
     export async function FindUserbyID(userId) {
        const user = await User.findById(userId).exec()
        return user 
             
     }
     export async function deleteduserbyid(userId) {
        const user = await User.deleteOne({
            _id:userId
        })
        return user
     }
     export async function uptadeuserbyid(userid, data) {
        const user = await User.updateOne({
            _id:userid
    },{
        $set: {
            ...data
        }
    })
    return user
     }

export async function LoginUser(req, res) {
    const {email, password} = req.body
    const user = await GetUserbyEmail(email)
    if (!user) {
        return user
    }
    const match = bcryptjs.compareSync(password, user.password)
    if (!match) {
        return null
    }
    const JwtToken = await res.jwtSign( {
        _id: user._id,
        name: user.name,
        email: user.email
   },
{
    expiresIn: '31d' 
    })
    return JwtToken
}
export async function GetUserbyEmail(email) {
    const user = await User.findOne({
        email:email
    }).exec()
    return user
}