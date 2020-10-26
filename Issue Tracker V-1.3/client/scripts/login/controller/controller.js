app.run(function(factory) {
  let pr = factory.check();
  pr.then(data=>{
    console.log("data is ",data);
  },error=>{
    console.log(error);
  })
});
app.controller("ctrl",($scope,$window,$location,factory)=>{
 
   $scope.login = ()=>{
     console.log($scope.drop);
        $scope.datas = {
          'usertype': $scope.drop,
          'username': $scope.logUsername,
          'password': $scope.logPassword,
        }
    
        let promise = factory.login($scope.datas);
        
        promise.then(data=>{
          
          // console.log(data.data.record.firsttym);
          // alert(data.data.message);
            // localStorage.rights =  JSON.stringify(data.data.right);
            localStorage.setItem('right', JSON.stringify(data.data.right.userRights));
            
            // console.log();
          if(data.data.record){
         if(data.data.record.firsttym){
          
          // $location.path('/chngpwd');
          $window.location.href="/client/Login_v1/chngpwd.html";
         }else{
          // $location.path('/Dashboard');
          $window.location.href="/client/views/template.html";
         
          
         }
        }
      },error=>{
          $scope.error = error;
      })
    }


    // // ***************for change password***************************

    $scope.chng = ()=>{
      
           $scope.data = {
             'username': $scope.currentusername,
             'password': $scope.curpassword,
             'newname': $scope.newusername,
             'newemail': $scope.email,
             'newpwd': $scope.newpassword,
             'new word':$scope.newWord
           }
       
        //  console.log($scope.data);
           let promise = factory.chng($scope.data);
       
           promise.then(data=>{
            
             if(data.data.status == "S"){
              $window.location.href="/client/views/template.html";
             }
             
            // $scope.chngmsg = data.data.message.email;
             
          
             
         },error=>{
             console.log($scope.error);
             $scope.error = error;
         })
       }
    
})
