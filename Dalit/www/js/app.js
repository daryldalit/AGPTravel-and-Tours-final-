//// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
.state('app.student-org-select', {
    url: '/student-org-select',
    views: {
      'menuContent': {
        templateUrl: 'templates/student-org-pages/student-org-select.html'
      }
    }
  })

  .state('app.student-org', {
    url: '/student-org',
    views: {
      'menuContent': {
        templateUrl: 'templates/student-org-pages/student-org.html'
      }
    }
  })

  .state('app.student-org-newsfeed', {
    url: '/student-org-newsfeed',
    views: {
      'menuContent': {
        templateUrl: 'templates/student-org-pages/student-org-newsfeed.html'
      }
    }
  })

  .state('app.student-org-list', {
    url: '/student-org-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/student-org-pages/student-org-list.html'
      }
    }
  })

  .state('app.destination-select', {
    url: '/destination-select',
    views: {
      'menuContent': {
        templateUrl: 'templates/destination-list/destination-select.html'
      }
    }
  })
  .state('app.destination-surigao', {
    url: '/destination-surigao',
    views: {
      'menuContent': {
        templateUrl: 'templates/destination-list/destination-surigao.html'
      }
    }
  })

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////destinations route/////////////////////////////

  .state('app.destination-dahilayan', {
    url: '/destination-dahilayan',
    views: {
      'menuContent': {
       templateUrl: 'templates/destination-list/destination-dahilayan.html'
  }
 }
 })

  .state('app.destination-camiguin', {
    url: '/destination-camiguin',
    views: {
      'menuContent': {
       templateUrl: 'templates/destination-list/destination-camiguin.html'
  }
 }
 })

  .state('app.destination-siargao', {
    url: '/destination-siargao',
    views: {
      'menuContent': {
       templateUrl: 'templates/destination-list/destination-siargao.html'
  }
 }
 })

.state('app.destination-bohol', {
    url: '/destination-bohol',
    views: {
      'menuContent': {
       templateUrl: 'templates/destination-list/destination-bohol.html'
  }
 }
 })

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////BOOKING FORM/////////////////////////////////////////////
  .state('app.book-surigao', {
    url: '/book-surigao',
    views: {
      'menuContent': {
        templateUrl: 'templates/destination-book/book-surigao.html'
      }
    }
  })

  .state('app.book-dahilayan', {
    url: '/book-dahilayan',
    views: {
      'menuContent': {
        templateUrl: 'templates/destination-book/book-dahilayan.html'
      }
    }
  })

  .state('app.book-camiguin', {
    url: '/book-camiguin',
    views: {
      'menuContent': {
        templateUrl: 'templates/destination-book/book-camiguin.html'
      }
    }
  })

  .state('app.book-siargao', {
    url: '/book-siargao',
    views: {
      'menuContent': {
        templateUrl: 'templates/destination-book/book-siargao.html'
      }
    }
  })

  .state('app.book-bohol', {
    url: '/book-bohol',
    views: {
      'menuContent': {
        templateUrl: 'templates/destination-book/book-bohol.html'
      }
    }
  })

/////////////////////////////////////////////////////////////////////////////
//////////////////////////////FORMS CRUD///////////////////////////////////

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/login');
});
