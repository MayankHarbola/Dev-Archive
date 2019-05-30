
        window.addEventListener('beforeunload', function(e) {
            alert("Call")
                // Cancel the event as stated by the standard.
                
            e.preventDefault();
            // Chrome requires returnValue to be set.
            e.returnValue = '';
        });

       
    window.addEventListener("load", function() {
        var html = '';     
        
        document.querySelector("#btn").addEventListener("click",username);
        function username(){
            var name = document.querySelector("#name").value;
            if(localStorage){
            localStorage.myname = name;
            }
        }



            messages = [];
            var socket = io.connect();
            var field = document.getElementById("field");
            var sendButton = document.getElementById("send");
            var content = document.getElementById("content");
            
            if(content.innerHTML == ""){
                console.log("kuch to hua h");
               
                socket.on('data', function(data) {
                //    console.log(data[0].userid);
                
                    
                if(data){
                console.log(data);

                    
                    for (var i = 0; i < data.length; i++) {
                        
                        html += data[i].userid + ' :: ' + data[i].message + '<br />';
                        
                    }
                    content.innerHTML = html;
                   
                   }else{
                       html = "start group conversion ..........";
                       content.innerHTML = html;
                   }

                });
                console.log("kuch nhi hua");
            }
            
            // event register

            // Rec Server Messages
            socket.on('message', function(data) {
                if (data.message) {
                    if (data.userid) {
                        messages.push(data.userid + " :: " +data.message );
                    } else {

                        messages.push(data.message);
                    }
                    
                    for (var i = 0; i < messages.length; i++) {
                        html += messages[i] + '<br />';
                    }
                   
                    content.innerHTML = html;
                } else {
                    console.log("There is a problem:", data);
                }
            });
// Send Client Message to the Server
            sendButton.onclick = function() {
                var text = field.value;
                // Event fire
                socket.emit('send', {
                    userid: localStorage.myname,
                    message: text
                });
            };

        });