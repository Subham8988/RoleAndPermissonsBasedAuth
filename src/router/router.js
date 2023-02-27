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

module.exports=route;
