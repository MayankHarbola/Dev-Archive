app.config(function($routeProvider, $locationProvider){
    
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/',{
        template:"<h3>Dashboard</h3>"
    })
    .when('/solved',{
        templateUrl:'AdminViews/solvedIssue.html'
    })

    .when('/unsolvedsolved',{
        template:"<h3>Issue Table</h3>",
    })
    .when('/Userlist',{
        template:"<h3>User List</h3>",
        
    })
    
    .when('/userXlx',{
        template:"<h3>Add excel</h3>"
    })
    .when('/rightXlx',{
        template:"<h3>Add right Excel</h3>"
    })
    
    .otherwise({
        //template:`<h1>U Type Something Wrong </h1>`
        redirectTo:"/"
    })
})

