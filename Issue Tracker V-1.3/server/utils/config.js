var shortid = require('shortid');
module.exports = {
    userobject: 
    { 
    'userId': "AD"+shortid.generate(),
    'usertype': "admin",
    'username': "admin",
    'email': "admin@email",
    'password': "admin",
    'firsttym': true
    },

    userRight:{
        'rightId': "",
        'userRights': [
            {
            'rightName': "solved Issue",
            'url': "/solved"
            },

            {
            'rightName': "unsolved Issue",
            'url': "/unsolvedsolved"
            },

            {
            'rightName': "Userlist",
            'url': "/Userlist"
            },

            {
              "rightName": "Add user Excel",
              'url': "/userXlx"
            },
            {
                "rightName": "Add user Rights Excel",
                "url": "/rightXlx"
            },

        ]
    }
}