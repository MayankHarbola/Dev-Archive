app.controller('userlist',function($scope,adminfact){
    
    // **************showing user*********************
    let promise = adminfact.userlist();
    
    promise.then(data=>{
        console.log(data.data.record);
       
        $scope.users = data.data.record;
   
    },error=>{
         console.log(error);
    })

    // ***************adding user********************
    $scope.addUser = ()=>{
        var userobj ={
            'usertype': $scope.type,
            'username': $scope.name,
            'email': $scope.email,
            'password': $scope.password,
            'firsttym': $scope.firsttym
        }

        var pr = adminfact.add(userobj);

        pr.then(data=>{
            alert('data added 😃');
        },error=>{
            console.log(error);
        })

    }

    // *************************editing*********
    var editObj = {
      'username': '',
      'password': '',
      'newname': '',
      'newemail': '',
      'newpwd': '',
      'newtype':'',
      'firsttym':''
    }
   $scope.edit = (val)=>{
     editObj.username = val.username;
     editObj.password = val.password;
     
     
     $scope.type = val.usertype;
     $scope.name = val.username;
     $scope.password = val.password;
     $scope.email = val.email;
    $scope.firsttym = '' + val.firsttym;
    //  console.log($scope.firsttym);
   }

  //  *******************************update********************

  $scope.update = ()=>{
    editObj.newname = $scope.name;
    editObj.newemail = $scope.email;
    editObj.newpwd = $scope.password;
    editObj.newtype = $scope.type;
    editObj.firsttym = $scope.firsttym;
    console.log(editObj);

    var pr = adminfact.edit(editObj);

    pr.then(data=>{
        alert('data edited Succesfully 😃');
    },error=>{
        console.log(error);
    })
  }
})