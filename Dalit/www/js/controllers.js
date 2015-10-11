angular.module('starter.controllers', [ 'starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
 /* $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  }; */


})



.controller('SetCriteriaCtrl', function($scope, $stateParams, $ionicModal, ContactService) {

   $scope.showForm = true;
   $scope.RegisteredUser = ContactService.GetRegisterUser();

   $scope.SurigaoPosts = ContactService.GetSurigaoPosts();
   $scope.DahilayanPosts = ContactService.GetDahilayanPosts();
   $scope.CamiguinPosts = ContactService.GetCamiguinPosts();
   $scope.SiargaoPosts = ContactService.GetSiargaoPosts();
   $scope.BoholPosts = ContactService.GetBoholPosts();
   
   $scope.DestinationFeedback = ContactService.GetDestinationFeedback();
   


      $scope.RegisterUser = function(){
          ContactService.SaveUser($scope.register);
          $scope.register = {};
        }

/////////////////////////////////////////////////////////////////////////////
//////////////////////Destination controller/////////////////////////////////

        $scope.AddDestinationPost = function(){
          ContactService.SaveDestinationFeedback($scope.destination);
          $scope.destination = {};
          $scope.postform = false;
        }

        $scope.AddDahilayanPost = function(){
          ContactService.SavePostDahilayan($scope.dahilayan);
          $scope.dahilayan = {};
          $scope.postform = false;
        }

        $scope.AddCamiguinPost = function(){
          ContactService.SavePostCamiguin($scope.camiguin);
          $scope.camiguin = {};
          $scope.postform = false;
        }

        $scope.AddSiargaoPost = function(){
          ContactService.SavePostSiargao($scope.siargao);
          $scope.siargao = {};
          $scope.postform = false;
        }

        $scope.AddBoholPost = function(){
          ContactService.SavePostBohol($scope.bohol);
          $scope.bohol = {};
          $scope.postform = false;
        }


////////////////////////////////////////////////////////////////////////////////////

      $scope.DeleteUser = function(id){
          ContactService.DeleteUser(id);
          if($scope.register.id == id)
          $scope.register = {};
        }

      $scope.UpdateUser = function (id){
        $scope.register = angular.copy(ContactService.get(id));
        }



          $ionicModal.fromTemplateUrl('templates/browse.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };


});















