const ChatModel = require("../models/Add_chat"); // bolle toh ChatModel ko utha liya 

const chatOperation = {
    add(chatObject,response){

        ChatModel.create(chatObject,(err)=>{
            if(err)
            {
                console.log(err,'Error in Record Add');
                response.status(500).json({status:'S',message:'Record Not Added Due to Error'});
            }
            else{
                console.log('Record Added..');
                response.status(200).json({status:'S',message:'Record Added'});
            }
        });
    },

    retrieve(response){

        ChatModel.find().toArray((err,docs)=>{
            if(err){
                response.status(500).json({status:'E',message:'Error in DB During Find Operation'});
           }
           else{
            if(docs)
            {
                 response.status(200).json({status:'S', data: docs });
            }
            else
            {   
                response.status(404).json({status:'F',message:'Start your conversation'});
            }
           }
        });

    }
}


