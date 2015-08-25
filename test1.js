var json = {
    "players": {
                "player": {
                    "player-name": "Cam Newton",
                    "player-stats": {
                        "position": "QB",
                        "passingYards": 226,
                        "passingTouchdowns": 3


                    }
                },
				"player": {
				    "player-name": "Aaron Rodgers",
				    "player-stats": {
				        "position": "QB",
				        "passingYards": 327,
				        "passingTouchdowns": 3,
				    }

				}
			}

};
var array = [];
for (var key in json) {
       var item = json[key];
   		for (var key in item) {
   			var test = item[key];
   			array.push({
		       name: test["player-name"] ,
		       position: test["player-stats"].position,
		       yd: test["player-stats"].passingYards,
		       pa: test["player-stats"].passingTouchdowns,

    }); 


    }
}
    //console.log(test);
    //console.log(test["player"])

//     array.push({

//        name: item.player.player-name ,
//        position: item.player.player-stats.position,
//        yd: item.player.player-stats.passing-yards,
//        pa: item.player.player-stats.passing-touchdowns,

//     });            
// }

