const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(){
  const getJourneyStartLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return getJourneyStartLocations;
}

Traveller.prototype.getJourneyEndLocations = function(){
  const getJourneyEndLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return getJourneyEndLocations
}

Traveller.prototype.getJourneysByTransport = function (transport) {
  const getJourneysByTransport = this.journeys.filter((journey) =>{
    return journey.transport === transport;
  })
  return getJourneysByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const getJourneysByMinDistance = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
  return getJourneysByMinDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function (){
  const calculateTotalDistanceTravelled = this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0)
  return calculateTotalDistanceTravelled
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let result = [...new Set(this.journeys.map(journey => journey.transport))];
    return result;
};

module.exports = Traveller;
