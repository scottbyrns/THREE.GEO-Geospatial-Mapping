THREE.GEO.GeoSymbol = function (mesh, material, coordinates) {
	
    THREE.Mesh.apply(this, [mesh, material]);
	
	// this.scale = scale;
	
    this.coordinates = {
            phi: coordinates.phi || coordinates.lat,
            lambda: coordinates.lambda || coordinates.lon,
			radius: coordinates.radius || coordinates.elevation
    }
	
	
};

THREE.GEO.GeoSymbol.prototype = new THREE.Mesh();
THREE.GEO.GeoSymbol.prototype.constructor = THREE.GEO.GeoSymbol;