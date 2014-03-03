THREE.Geo Geospatial-Mapping
===========================

Extensions to three.js for doing simple geospatial mapping.



###Usage THREE.GeoSpatialMap
```

var earth = new THREE.GeoSpatialMap(geometry, material);
earth.setTexturesEdgeLongitude(-180.806168);

for (i = 0; i < continentData.length; i += step) {
	
    var lat = continentData[i];
    var lng = continentData[i + 1];

	var light = new THREE.PointLight(0x0099ff);
	var plant = new org.good.ecology.Plant();
	plant.scale.x = plant.scale.y = plant.scale.z = Math.random() * 3;
	
	console.log("Adding symbol at: " + lat + " : " + lng);
	earth.addGeoSymbol(
		new THREE.GeoSpatialMap.GeoSymbol(plant, {
			phi: lat,
			lambda: lng
		})
	);
	
	
	plant.lookAt(earth.position);

}

```
