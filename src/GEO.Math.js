THREE.GEO.Math = {
	
	degreesToRadians: function(degrees) {
	        return degrees * Math.PI / 180;
	},

	coordinatesToRadians: function (phi, lambda) {
        
	        var radianVector = new THREE.Vector2(
	                THREE.GEO.Math.degreesToRadians(-phi) + Math.PI/2,
	                THREE.GEO.Math.degreesToRadians(-lambda) - Math.PI/2
	        );
			
	        return radianVector;
	}
	
	
};
