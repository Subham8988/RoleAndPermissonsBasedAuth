// require express module
const express = require('express');
// require router 
const route = express.Router();
// require method 
const controller = require('../controller/userActions')

// for permisson 
route.post('/createPermissons',controller.createPermissons);
route.delete('/deletePermisson',controller.deletePermissons);
route.get('/permissonsList',controller.permissonsList);

//for role 
route.post('/createRole',controller.createRole);
route.delete('/deleteRole',controller.deleteRole);
route.get('/roleList',controller.roleList);

//assign permissons to role
route.post('/asignPermissonsToRole',controller.assignPtoR);

//create user
route.post('/creatUser',controller.registerUsers);
route.delete('/deleteUser',controller.deleteuser);
route.get('/all_users',controller.userList);

// assign role to user
route.post('/assignRoleToUser',controller.assignRoleToUser);

//single user data
route.get('/userDetails',controller.single_user_data);

module.exports=route;
