// function topPlayers (players) {
//   var result  = [];
  
//   for(var i = 0; i < players.length; i++) {
//     if(players[i].score > 100) {
//       result.push(players[i].name);
//     }
//   }
  
//   return result;
// }


function topPlayers (players) {
  var result = [];
  
  if(players.length === 0) {
    return result;
  }
  
  else if(players[0].score > 100) {
    result.push(players[0].name);
  }

  return result.concat(topPlayers(players.slice(1)));
  
  
}