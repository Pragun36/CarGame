class Form {
constructor() {
this.input = createInput("Enter Your Name");
this.button = createButton('Play');
this.greeting = createElement('h3');}

hide(){
this.input.hide();
this.button.hide();
this.greeting.hide();}

display(){
var title = createElement('h2')
title.html("The Getaway");
title.position(130, 0);

this.input.position(130, 160);
this.button.position(250, 200);

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();

player.name = this.input.value();

playerCount+=1;
player.update();
player.index = playerCount
player.updateCount(playerCount);
this.greeting.html("This is the Tale of " + player.name )
this.greeting.position(130, 160)});}}