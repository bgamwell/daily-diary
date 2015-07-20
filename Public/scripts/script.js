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

  // *****Simulated Database*****
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

  $.get('/api/users/current', function(user) {
      console.log(user);

      // require that a user enter a first name to sign up

      // pass user through underscore template
      var $user = $(profileTemplate(user));
      // append user to the page
      $userInformation.append($user);
    });


    // _.each(userProfile, function (user) {
    //   console.log(user);
    // var $user = $(profileTemplate(user));
    // $userInformation.append($user);
    // });

    var logTemplate = _.template($('#log-template').html());


  }); // close $(document).ready
