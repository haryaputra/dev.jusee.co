    //Place your own Instagram client_id below. Go to https://instagram.com/developer/clients/manage/ and register your app to get a client ID
  var client_id = '7bb265773cc54f6e9a80acbcb56486ce';
    //To get your user ID go to http://jelled.com/instagram/lookup-user-id and enter your Instagram user name to get your user ID
  var user_id = '1512315656';
  var feed_count = '6';

var juseeApp = angular.module('juseeApp',['ngRoute','ngtweet']);
    juseeApp.config(function($routeProvider){
        $routeProvider
            .when('/',{
                  templateUrl : 'pages/home.html',
                  controller : 'mainController'
                  })
            .when('/home',{
                  templateUrl : 'pages/home.html',
                  controller : 'mainController'
                  })
            .when('/menu',{
                  templateUrl : 'pages/menu.html',
                  controller : 'menuController'
                  })
            .when('/buynow',{
                  templateUrl : 'pages/buynow.html',
                  controller : 'buynowController'
                  })
            .when('/contact',{
                  templateUrl : 'pages/contact.html',
                  controller : 'contactController'
                  })
            .when('/promo',{
                  templateUrl : 'pages/promo.html',
                  controller : 'promoController'
                  })
            .when('/promo/refreshment',{
                  templateUrl : 'pages/promo.html',
                  controller : 'promoController'
                  })
    });
    juseeApp.controller('menuController', function($scope) {
        $scope.message = 'MenaMenu';
    });
    juseeApp.controller('buynowController', function($scope) {
        $scope.message = 'yukdibeli';
    });
    juseeApp.controller('contactController', function($scope) {
        $scope.message = 'callme!';
    });
    juseeApp.controller('promoController', function($scope) {
        $scope.message = 'YYAAAYY!';
    });

    juseeApp.factory("InstagramAPI", ['$http', function($http) {
    return {
      fetchPhotos: function(callback){
        var endpoint = "https://api.instagram.com/v1/users/" + user_id + "/media/recent/";
        endpoint += "?count=6";
        endpoint += "&client_id=" + client_id;
        endpoint += "&callback=JSON_CALLBACK";
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
      }
    }
  }]);

  juseeApp.controller('mainController', function($scope, InstagramAPI){
    $scope.layout = 'grid';
    $scope.data = {};
    $scope.pics = [];
      
    InstagramAPI.fetchPhotos(function(data){
      $scope.pics = data;
    });
  });