//Zombie Game

var sad = confirm("Would you like to be cheered up ?");

while(sad){

  alert("What do you call a boomerand that doesn't come back? ... A stick!");
  var yes = confirm("Would you like to continue our session?");

  if(yes) {
    var response = prompt("Tell me about your troubles:", "Type your feelings here");

    if(response){
      alert("I am sorry you are feeling down about that. I know you can't see it, but i will give you a hug! ... **HUG**")
      sad = false;
    }
  } else {
    sad = false;
  }
}
