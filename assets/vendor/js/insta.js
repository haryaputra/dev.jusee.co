(function(){
    //Place your own Instagram client_id below. Go to https://instagram.com/developer/clients/manage/ and register your app to get a client ID
  var client_id = '7bb265773cc54f6e9a80acbcb56486ce';
    //To get your user ID go to http://jelled.com/instagram/lookup-user-id and enter your Instagram user name to get your user ID
  var user_id = '1512315656';
  var feed_count = '6';

  var app = angular.module('instafeed', []);

  app.factory("InstagramAPI", ['$http', function($http) {
    return {
      fetchPhotos: function(callback){
        var endpoint = "https://api.instagram.com/v1/users/" + user_id + "/media/recent/?";
        endpoint += "?count="+ feed_count;
        endpoint += "&client_id=" + client_id;
        endpoint += "&callback=JSON_CALLBACK";
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
      }
    }
  }]);

  app.controller('ShowImages', function($scope, InstagramAPI){
    $scope.layout = 'grid';
    $scope.data = {};
    $scope.pics = [];
      
    InstagramAPI.fetchPhotos(function(data){
      $scope.pics = data;
    });
  });

})();