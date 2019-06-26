const Model = require('../models/userSchema');
const userModel = Model.userModel;
const userMap = Model.mapModel;
const userRight = Model.rightModel;
const issueModel = Model.issueModel;
const definedObj = require('../../utils/config');
var shortid = require('shortid');

const TesterOpertation = {
    addIssue(userObject,response){
      userObject.bugSatus = "on";
      userObject.rightId= 'IR'+shortid.generate();
        issueModel.create(userObject,(err,doc)=>{
            if(err){
                
                response.json({status: 'F',message: "Error in adding Issue"})
            }else{
                console.log("Issue is ",doc);
                response.json({status: 'S',message: "Issue added ..",data: doc});
            }
        })
    },

    getIssues(response){
       issueModel.find({},(err,docs)=>{
           if(err){
               console.log("Error is ",err)
               response.json({status: 'F'})
           }else{
            
               response.json({status: 'S',data: docs});
           }
       })
      },
}

module.exports = TesterOpertation;