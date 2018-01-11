//Zombie Game

alert("It is the zombie apocalypse. You are looting a store and suddenly a zombie bursts through the door!");
var weapon = prompt("You searched around frantically for a weapon. What do you choose? A bow and arrow, an axe, or a rubber chicken?");
var randomNumber = Math.round(Math.random());

alert(`You attacked the zombie with your ${weapon}!`);

if(randomNumber === 0) {
  alert(`The zombie bites you. Game Over !!!`);
} else if (randomNumber === 1) {
  alert(`You killed the zombie with your ${weapon}. You Win!`);
}
