import UserModel from "../models/UserModel.js";


const signup = async(req, res) => {
    try {
        const {email, password, fullName, confirmPassword} = req.body;
        const userExists = await UserModel.findOne({email});

        if(password !== confirmPassword) {
            return res.status(400).json({message: "Password do not match!"});
        }

        if(userExists) {
             return res.status(400).json({message: "User already exists!"});
        }

        const newUser = new UserModel({email, password, fullName, confirmPassword});
        const saveUser = await newUser.save();
        return res.status(200).json(saveUser);
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}

export default signup;