var _ = require("lodash");

var worker = function addCitySize(cities){
  return _.forEach(cities, function(city){
    if (city.population > 1.0){
      city.size = 'big';
    }
    else if (city.population > 0.5){
      city.size = 'med';
    }
    else if (city.population < 0.5){
      city.size = 'small';
    }
    }
  );
}

module.exports = worker;
