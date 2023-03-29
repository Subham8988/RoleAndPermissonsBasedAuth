const { default: mongoose } = require('mongoose');
const db = require('mongoose');


const permissonsSchema = db.Schema({
    permission_Name:{
        type:String
    },
    permission_Status :{
        type:Boolean
    },
    permission_Id:{
        type:Number
    },
},{ versionKey: false });

const roleSchema =db.Schema({
    role_Name:{
        type:String
    },
    role_Id:{
        type:Number
    },
    role_Status:{
        type:Boolean
    },
    permissons:[

    ],
},{ versionKey: false });

const userSchema =db.Schema({
    name:{
        type:String
    },
    mobile_no:{
        type:Number
    },
    email:{
        type:String
    },
    Status:{
        type:Boolean
    },
    user_id:{type:Number},
    password:{
        type:String
    },
    adminCheck :{
        type:Boolean
    },
    role:[

    ]
},{versionKey:false});
const permissons = new mongoose.model('permisson',permissonsSchema);
const roles = new mongoose.model('role',roleSchema);
const users= new mongoose.model('user',userSchema);
module.exports ={permissons,roles,users};