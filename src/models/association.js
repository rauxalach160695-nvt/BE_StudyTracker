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

User.hasMany(Badge,{
    foreignKey: 'userId',
    as: 'badges'
})
Badge.belongsTo(User,{
    foreignKey:'userId',
    as: 'user'
})

User.hasMany(Skill,{
    foreignKey: "userId",
    as: "skills"
})
Skill.belongsTo(User,{
    foreignKey: "userId",
    as: "user"
})

Skill.hasMany(Plan,{
    foreignKey: 'skillId',
    as: 'plans'
})
Plan.belongsTo(Skill,{
    foreignKey: 'skillId',
    as: "skill"
})

Plan.hasMany(ProgressLog,{
    foreignKey: 'planId',
    as: "progressLogs"
})
ProgressLog.belongsTo(Plan,{
    foreignKey: 'planId',
    as: "plan"
})

Plan.hasMany(Resource,{
    foreignKey: "planId",
    as: 'resources'
})
Resource.belongsTo(Plan,{
    foreignKey: 'planId',
    as: "plan"
})

User.hasMany(Notification,{
    foreignKey: 'userId',
    as: "notifications"
})
Notification.belongsTo(User,{
    foreignKey: "userId",
    as: "user"
})