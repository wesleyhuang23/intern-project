angular.module('internApp').controller('internCtrl', function($scope, service){

$scope.storeProfile = function(fullName, tagline, imgUrl, bio){
  $scope.profile = service.storeProfile(fullName, tagline, imgUrl, bio);
  console.log($scope.profile);
};

$scope.friendData = service.friendData;
console.log($scope.friendData);

//$scope.storeProfile();

});
