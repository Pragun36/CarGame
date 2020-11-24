class Game {
constructor(){}
  
getState(){
var gameStateRef  = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();})}

update(state){
database.ref('/').update({
gameState: state});}

async start(){
if(gameState === 0){
player = new Player();
var playerCountRef = await database.ref("playerCount").once("value");
if(playerCountRef.exists()){
playerCount = playerCountRef.val();
player.getCount();}

form = new Form()
form.display();}}

play(){
form.hide();
Player.getPlayerInfo();

if(allPlayers!==undefined){
var pos = 200;
for(var i in allPlayers){
if(i === "player" + player.index){
fill("red")}
else{
fill("black")}

pos = pos + 20;
textSize(15);
text(allPlayers[i].name + ":" + allPlayers[i].distance, 120, pos)}}

if(keyIsDown(UP_ARROW))
player.distance = player.distance+50
player.update();}}