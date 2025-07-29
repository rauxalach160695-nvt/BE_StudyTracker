const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.addUser = asyncHandler(async (req, res, next) => {
  const {email, password} = req.body;
  const userData = await User.build({
    email: email,
    password: password, 
  });
  try {
      await userData.save();
  } catch (error) {
    console.log(error)
  }
  return res.status(200).json({ message: "User added successfully" });
});

exports.login = asyncHandler(async(req, res, next) => {
    const {email, password} = req.body;
    if (email && password){
        const user = await User.findOne({ where: {email: email}})
        console.log(user.role)
        const isMath = await bcrypt.compare(password, user.password)
        if(!isMath){
            return res.status(400).json({message: "Wronng email address or password! Please check again."})
        }
        const token = jwt.sign({userId: user.id, role: user.role}, process.env.SECRET_TOKEN)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000
        })
        res.status(200).json({message: "Login successfully!"})
    }

});

exports.cookie = asyncHandler(async(req, res, next) => {
    const token = req.cookies.token
    console.log(token)
    res.status(200).json({message: "have cookie!!!"})
})