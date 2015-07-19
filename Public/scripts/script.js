$(document).ready( function(){

  console.log("Javascript works!");

  var $loginButton = $('#login-button');

  var $signupButton = $('#signup-button');

  var $loginModal = $('#login-modal');

  var $signupModal = $('#signup-modal');

  var $userInformation = $('#user-information-rendered-here');

  $loginButton.on('click', function(){
    $loginModal.modal('show');
  });

  $signupButton.on('click', function(){
    $signupModal.modal('show');
  });

  var userProfile = [ {
    firstname: "Brennan",
    lastname: "Gamwell",
    profile_picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/0a2/3d7/18144fd.jpg",
    email: "bgamwell@gmail.com",
    passwordDigest: "testing"
  },
 ];

  // profile template (this is a function)
  var profileTemplate = _.template($('#profile-template').html());

  // underscore templating to render userProfile to the profile page

  _.each(userProfile, function (user) {
    console.log(user);
  var $user = $(profileTemplate(user));
  $userInformation.append($user);
  });

});
