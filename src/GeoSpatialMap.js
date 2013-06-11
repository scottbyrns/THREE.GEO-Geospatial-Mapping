		THREE.GeoSpatialMap = function () {
			THREE.Mesh.apply(this, arguments);
			this.radius = 6367;
			this.texture_edge_longitude = 0;
		};
		
		
		THREE.GeoSpatialMap.GeoSymbol = function (object, coordinates) {
			this.mesh = object;
			this.coordinates = {
				phi: coordinates.phi,
				lambda: coordinates.lambda
			}
		};
		
		THREE.GeoSpatialMap.prototype = new THREE.Mesh();

		
		THREE.GeoSpatialMap.prototype.setTexturesEdgeLongitude = function (texture_edge_longitude) {
			this.texture_edge_longitude = texture_edge_longitude;
		};
		

		THREE.GeoSpatialMap.prototype.setRadius = function (radius) {
			this.radius = radius;
		};

		THREE.GeoSpatialMap.prototype.degreesToRadians = function(degrees) {
			return degrees * Math.PI / 180;
		};

		THREE.GeoSpatialMap.prototype.coordinatesToRadians = function (phi, lambda) {
			
			var radianVector = new THREE.Vector2();
			radianVector.set(
				this.degreesToRadians(-phi) + Math.PI/2,
				this.degreesToRadians(-lambda) - Math.PI/2
			);
			
			console.log(radianVector);
			
			return radianVector;
		};
		
		THREE.GeoSpatialMap.prototype.addGeoSymbol = function (geoSymbol) {			
			
			if (!(geoSymbol instanceof THREE.GeoSpatialMap.GeoSymbol)) {
				console.warn("A must provide an instance of THREE.GeoSpatialMap.GeoSymbol.");
				return;
			}
			
		    var phi = (90 - (geoSymbol.coordinates.phi)) * Math.PI / 180;
		    var theta = (180 - (geoSymbol.coordinates.lambda - this.texture_edge_longitude)) * Math.PI / 180;
			
		    geoSymbol.mesh.position.x = this.radius * Math.sin(phi) * Math.cos(theta);
		    geoSymbol.mesh.position.y = this.radius * Math.cos(phi);
		    geoSymbol.mesh.position.z = this.radius * Math.sin(phi) * Math.sin(theta);

			this.add(geoSymbol.mesh);
			
		};
		
		THREE.GeoSpatialMap.prototype.coordinatesToVector3 = function (radianCoordinates) {
			
			var vector = new THREE.Vector3();
			
			vector.set(radianCoordinates.x, radianCoordinates.y - Math.PI/2, this.radius);
			window.vector = vector;
			console.log(vector, this.radius);
			vector.set(
				this.radius * Math.cos(vector.y) * Math.sin(vector.x),
				this.radius * Math.sin(vector.y) * Math.sin(vector.x),
				this.radius * Math.cos(vector.x)
			);
			
			return vector;
		};	
		
		THREE.GeoSpatialMap.prototype.constructor = THREE.GeoSpatialMap;
		