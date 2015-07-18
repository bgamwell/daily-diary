$(document).ready( function(){

  console.log("Javascript works!");

  var $loginButton = $('#login-button');

  var $signupButton = $('#signup-button');

  var $loginModal = $('#login-modal');

  var $signupModal = $('#signup-modal');

  $loginButton.on('click', function(){
    $loginModal.modal('show');
  });

  $signupButton.on('click', function(){
    $signupModal.modal('show');
  });

});
