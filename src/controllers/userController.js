const asyncHandler = require('express-async-handler')
const User = require("../models/user")

exports.addUser = asyncHandler( async (req, res, next) =>{
    return res.status(200).json({"message":"add user in progress...."})
})