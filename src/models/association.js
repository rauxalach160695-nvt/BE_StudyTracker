const User = require("./user");
const Avatar = require("./avatar")
const Notification = require("./notification")
const Badge = require("./badge")
const Plan = require("./plan")
const ProgressLog = require("./progessLog")
const Resource = require('./resource')
const Skill = require('./skill')

User.belongsTo(Avatar,{
    foreignKey:'avatarId',
    as: 'avatar'
})
Avatar.hasMany(User,{
    foreignKey: 'avatarId',
    as: 'users'
})