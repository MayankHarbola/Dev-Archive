app.controller("Dashboard",function($scope){
    var retrievedObject = localStorage.getItem('right');
    $scope.data = JSON.parse(retrievedObject);
    // console.log('retrievedObject: ', $scope.data);
    
    
})