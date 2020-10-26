var express = require("express");
var socket = require("socket.io");
const mongoose = require("mongoose");
var app  = express();

mongoose.connect("mongodb+srv://admin:admin@shopdb-ykzx1.mongodb.net/chat?retryWrites=true");
mongoose.connection.on('open',()=>{
    console.log('ConnectionOpen');
});

const Schema = mongoose.Schema;  // bole toh mongoose.Schema-- >aur ab schema ekk function constructor ki trah act kar rha h jo                                       ki schema ka object kesa hoga define karega 

const chatSchema = new Schema({
   "userid":{type: String,default:'Anonmous'},
   "message":{}
});

const ChatModel = mongoose.model('message',chatSchema);


app.use(express.static("public"));
// var server  = app.listen(9000,function(){
// 	console.log("Server Start....");
// })
var messages= [];
var server = app.listen(process.env.PORT || 8000,(err)=>{
	if(err){
		console.log(err);
			throw err;
	}
	else{
	console.log('Server Start............');
	}
})


var io = socket(server);
io.sockets.on('connection', function (socket) {

    console.log('connection :', socket.request.connection._peername);
    
    // socket.emit('message', { message: 'Server is Saying welcome to the chat'+socket.id });
    // socket.emit('data',messages); // send data
   
    ChatModel.find({},(err, docs)=>{
        console.log("me chl rha hu")
       if(err) {
           console.log(err);
       }
       else{
        socket.emit('data',docs);
        console.log(docs);
       }
    })

   

    
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
	
	socket.on('send', function (data) {
        console.log(data);
        io.sockets.emit('message', data);
        messages.push(data);   // store data

        ChatModel.create(data,(err)=>{
            if(err)
            {
                console.log(err,'Error in Record Add');
                // response.status(500).json({status:'S',message:'Record Not Added Due to Error'});
            }
            else{
                console.log('Record Added..');
                // response.status(200).json({status:'S',message:'Record Added'});
            }
        });

        
        // console.log(JSON.stringify(messages));     /// 
    });
});

