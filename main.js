var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

  P.getEvolutionChainById(1)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
