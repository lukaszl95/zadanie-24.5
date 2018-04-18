const calculateDistancePoints = (distance, hillSize, kPoint) => {
	if (hillSize === 'Skocznia normalna'){
		var distancePoints = (distance - kPoint)*2;
		var points = 60 + distancePoints;
			}
	if (hillSize === 'Skocznia duza'){
		var distancePoints = (distance - kPoint)*1.8;
		var points = 60 + distancePoints;
	}
	if (hillSize === 'Skocznia mamucia'){
		var distancePoints = (distance - kPoint)*1.2;
		var points = 120 + distancePoints;
	}
	return points;
};

module.exports = calculateDistancePoints;