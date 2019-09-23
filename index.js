var dwarves = ["Doc", "Dopey", "Grmpuy", "Bashfull"];
var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
var words = ["earth", "wind", "fire", "water", "heart"]
var foods = ["gouda", "chedar", "crackers"]

function dwarfRollCall(dwarves) {
  var newDwarfs = [];
  for (var i = 0; i < dwarves.length; i++){
    newDwarfs.push(`${i + 1}. ${dwarves[i]} `);
  }
  return newDwarfs.join("");
}
function summonCaptainPlanet(planeteerCalls){
  var array = [];
  for (var i=0; i<planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase(); 
    array.push(`${planeteerCalls[i]}!`);
  }
  return array;
}

function longPlaneteerCalls(words) {
  if (words.length<=4){
    return false;
  }
  else {
    return true;
  }
}

function findTheCheese (foods) {
  for (var i=0; i<foods.length; i++){
    foods.shift();
    if (foods[i] === "gouda"){
      return `gouda`;
    }
    else if (foods[i] === `cheddar`){
      return 'cheddar';
    }
    else {
      return `no cheese!`;
      }
  }
}

