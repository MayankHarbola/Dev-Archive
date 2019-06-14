const AdminRoute = require('express').Router();
const AdminOperation = require('../db/helpers/adminCrud');

AdminRoute.get('/userlist',(req,res)=>{
    
    AdminOperation.userlist(res);

})

AdminRoute.post('/adduser',(req,res)=>{
    const json = req.body;
    AdminOperation.add(json,res);
})

AdminRoute.post('/edit',(req,res)=>{
    const json = req.body;
    AdminOperation.edit(json,res);
})

module.exports = AdminRoute;