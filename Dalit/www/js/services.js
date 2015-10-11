angular.module('starter.services', [])

.service('ContactService', function () {
    //to create unique data id
    var uid = 1;
    

///////////////////////////////////////////////////////////////////////
//////////////////Destination Functions $ Objects(value)///////////////

    var SurigaoPosts = [{
        id: 0,
        'post': "Hotel (2 nights & 3 days) = 1000php",
        'post1': "Beach with cottage = 500php",
        'post2': "Breakfast Meal = 300php",
        'post3': "Lunch Meal = 300php",
        'post4': "Dinner Meal = 300php",
        'post5': "Extended Time = 500php",

        'postedBy' : 'Daryl'
    }];

    this.SavePostScholar = function(data){
        if (data.id == null) {
            //if this is new data, add it in StudentList array
            data.id = uid++;
            SurigaoPosts.push(data);  
        } else {
            //for existing data, find this data using id
            //and update it.
            for (i in SurigaoPosts) {
                if (SurigaoPosts[i].id == data.id) {
                    SurigaoPosts[i] = data;
                }
            }
        }
    }

    this.GetSurigaoPosts = function () {
        return SurigaoPosts;
    }

///////////////


    var DahilayanPosts = [{
        id: 0,
        'post': "Dormitory (2 nights & 3 days) = 2,500php",
        'post1': "Zipline Ride = 300php",
        'post2': "Phython Ride= 300php",
        'post3': "DropZone Ride = 300php",
        'post4': "Forest Park = 300php",
        'post5': "Shuttle(service) = 500php",
        'post6': "Tour Guide = 300php",

        'postedBy' : 'Daryl'
    }];

    this.SavePostsDahilayan = function(data){
        if (data.id == null) {
            data.id = uid++;
            DahilayanPosts.push(data);  
        } else {
            for (i in DahilayanPosts) {
                if (DahilayanPosts[i].id == data.id) {
                    DahilayanPosts[i] = data;
                }
            }
        }
    }

    this.GetDahilayanPosts = function () {
        return DahilayanPosts;
    }

///////////////////

    var CamiguinPosts = [{
        id: 0,
        'post': "Overnight Cottage Room accommodation = 1,500php",
        'post1': "Walking Trip = 300php",
        'post2': "Photographer= 300php",
        'post3': "Cave = 600php",
        'post4': "Park Plaza = 300php",
        'post5': "Shuttle(service) = 900php",
        'post6': "Tour Guide = 300php",

        'postedBy' : 'Daryl'
    }];

    this.SavePostsCamiguin = function(data){
        if (data.id == null) {
            data.id = uid++;
            CamiguinPosts.push(data);  
        } else {
            for (i in CamiguinPosts) {
                if (CamiguinPosts[i].id == data.id) {
                    CamiguinPosts[i] = data;
                }
            }
        }
    }

    this.GetCamiguinPosts = function () {
        return CamiguinPosts;
    }

///////////////

    var SiargaoPosts = [{
        id: 0,
        'post': "Dormitory (2 nights & 3 days) = 2,500php",
        'post1': "Zipline Ride = 300php",
        'post2': "Phython Ride= 300php",
        'post3': "DropZone Ride = 300php",
        'post4': "Forest Park = 300php",
        'post5': "Shuttle(service) = 500php",
        'post6': "Tour Guide = 300php",

        'postedBy' : 'Daryl'
    }];

    this.SavePostsSiargao = function(data){
        if (data.id == null) {
            data.id = uid++;
            SiargaoPosts.push(data);  
        } else {
            for (i in SiargaoPosts) {
                if (SiargaoPosts[i].id == data.id) {
                    SiargaoPosts[i] = data;
                }
            }
        }
    }

    this.GetSiargaoPosts = function () {
        return SiargaoPosts;
    }

///////////////

    var BoholPosts = [{
        id: 0,
        'post': "Dormitory (2 nights & 3 days) = 2,500php",
        'post1': "Zipline Ride = 300php",
        'post2': "Phython Ride= 300php",
        'post3': "DropZone Ride = 300php",
        'post4': "Forest Park = 300php",
        'post5': "Shuttle(service) = 500php",
        'post6': "Tour Guide = 300php",

        'postedBy' : 'Daryl'
    }];

    this.SavePostsBohol = function(data){
        if (data.id == null) {
            data.id = uid++;
            BoholPosts.push(data);  
        } else {
            for (i in BoholPosts) {
                if (BoholPosts[i].id == data.id) {
                    BoholPosts[i] = data;
                }
            }
        }
    }

    this.GetBoholPosts = function () {
        return BoholPosts;
    }

/////////////////////////////////////////////////////////////////////

    var DestinationFeedback = [{
        id: 0,
        'post': "Chuy kayo ni nga lugar!! pa reserve namoooo!.",
    }];

    var RegisterUser = [{
        id: 0,
        'firstname': "King Rafael",
        'middlename': "Laid",
        'lastname': "Gamolo",
        'email': "kng@gmail.com",
        'username': "kingrafs",
        'password': "***"
    }];

    this.SaveDestinationFeedback = function(data){
        if (data.id == null) {
            data.id = uid++;
            DestinationFeedback.push(data);  
        } else {
            for (i in DestinationFeedback) {
                if (DestinationFeedback[i].id == data.id) {
                    DestinationFeedback[i] = data;
                }
            }
        }
    }


    this.SaveUser = function(data){
        if (data.id == null) {
            data.id = uid++;
            RegisterUser.push(data);  
            console.log(data);
        } else {RegisterUser
            for (i in RegisterUser) {
                if (RegisterUser[i].id == data.id) {
                    RegisterUser[i] = data;
                }
            }
        }
    }

    this.DeleteUser = function(id){
        for (i in RegisterUser) {
            if (RegisterUser[i].id == id) {
                RegisterUser.splice(i, 1);
            }
        }
    }

    this.get = function (id) {
        for (i in RegisterUser) {
            if (RegisterUser[i].id == id) {
                return RegisterUser[i];
            }
        }

    }
    
    this.GetRegisterUser = function () {
        return RegisterUser;
    }

    this.GetDestinationFeedback = function () {
        return DestinationFeedback;
    }

});

