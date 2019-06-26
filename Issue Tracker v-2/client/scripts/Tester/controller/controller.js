app.controller('testctrl',function($scope,$rootScope,$location,myfactory){
   $scope.addbug = ()=>{
       var data = {
        'projectName': $scope.projectname,
        'type': $scope.bugtype,
        'name':  $scope.username,
        'title': $scope.title,
        'description':  $scope.description,
        'photo': $scope.projectname,
        'assignTo': $scope.assignto,
        'reportingOfficer':  $scope.reportofficer
       }
      
       var pr = myfactory.addissue(data);

       pr.then(data=>{
        SweetAlert.swal("Added Issue", "Issue Added successfully 😃", "success");
          console.log("Essue is ",data);
       },error=>{
           console.log(error);
       })
   }

//    *******************************************************
var arr;
let promise = myfactory.getIssue();
promise.then(data=>{
    console.log(data.data.data);
  
    var myarr = [];
     arr = data.data.data
    var myobj;
    for(let value of data.data.data){
      myobj = {
        rightId: value.rightId,
        projectName: value.projectName,
        title: value.title,
        assignTo: value.assignTo,
        bugSatus: value.bugSatus,
         
      }
      myarr.push(myobj);
    }
    $scope.users = myarr;
    

},error=>{
     console.log(error);
})
// ****************************************************************************
$scope.moreInfo = (bugid)=>{
    console.log(arr);
    var found = arr.find(function(element) {
        return element.rightId == bugid;
      });
      
      console.log(found);
    $rootScope.singleIssue = found;

    $location.path('/singlIssue', false);
      
                

}

// ********************************************************************************

$scope.solved = ()=>{
  $location.path('/solvedIssue', false);
  
}


   
})