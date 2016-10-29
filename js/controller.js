angular.module('internApp').controller('internCtrl', function($scope, service){

$scope.storeProfile = function(fullName, tagline, imgUrl, bio){
  service.storeProfile(fullName, tagline, imgUrl, bio);
};

});
