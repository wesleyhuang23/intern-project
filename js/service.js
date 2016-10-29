angular.module('internApp').service('service', function(){

var friendData = [];

this.storeProfile = function(fn, tagline, imgUrl, bio){
  var profile = {};
  profile.fullName = fn;
  profile.tagline = tagline;
  profile.imgUrl = imgUrl;
  profile.bio = bio;
  friendData.push(profile);
  console.log(friendData);
  alert('Congratulations! We successfully created your profile.');
};

});
