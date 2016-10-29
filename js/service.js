angular.module('internApp').service('service', function(){

this.friendData = [{
  fullName: "Wesley Huang",
  tagline: "This is working",
  imgUrl: "https://i.vimeocdn.com/portrait/2859117_300x300",
  bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}];

this.storeProfile = function(fn, tagline, imgUrl, bio){
  var profile = {};
  profile.fullName = fn;
  profile.tagline = tagline;
  profile.imgUrl = imgUrl;
  profile.bio = bio;
  this.friendData.push(profile);
  console.log(this.friendData);
  return this.friendData;
};



});
