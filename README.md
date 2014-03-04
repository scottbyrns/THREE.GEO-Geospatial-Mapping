#THREE.Geo Geospatial-Mapping

Extensions to three.js for doing simple geospatial mapping.


##Repository Contents

* `build`			              - The build script for producing the packaged minified scripts.

* `demo/`			              - A number of example implementations of the Quad Tree Sphere
  * `js/`			              - Scripts used by the demos including the minified version of the THREE.GEO library.
  * `globe.html`   				  - A simple earth globe with a marker placed over New York state.
	
* `src/`                          - The main source files for the project.

* `build/`                        - The output directory for the build script.


##Bulding Project


##### Build Script Dependencies

Builds depend on uglify-js to perform minification.

```

sudo npm -g install uglify-js

```

##### Build Script

Once you have uglify-js installed simply run the build script.

```

./build

```

The build will generate a build directory in which you will find minified library.

* `build/`
	* `three.geo.min.js`          - The THREE.GEO library.


##### Build Cleanup

To clean the builds from the working directory run:

```

./build clean

```

## How To Use


###Example
```javascript

	var map = THREE.ImageUtils.loadTexture( 'textures/earth.jpg' );
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;

	var material = new THREE.MeshLambertMaterial( { wireframe:false, ambient: 0xFFFFFF, map: map } );





	spatialMap = new THREE.GEO.SpatialMap( new THREE.SphereGeometry( 6378, 200, 100 ), material );

	spatialMap.setRadius(6378);
	spatialMap.setTexturesEdgeLongitude(-183.806168);

	scene.add( spatialMap );
	
	var newYorkCoordinates = {
		lat: 40.67,
		lon: -73.9400,
		elevation: 1 // 1 km
	};
	
	
	
	var geoSymbol = new THREE.GEO.GeoSymbol(
		new THREE.SphereGeometry( 100, 20, 10 ),
		new THREE.MeshBasicMaterial({ color: 'red' }),
		newYorkCoordinates
	);
	
	spatialMap.addGeoSymbol(geoSymbol);


```

### Class Structure

#### THREE.GEO Namespace
This project will use the THREE.GEO namespace for each of it's constituent members.

#### [THREE.GEO.Math](https://github.com/scottbyrns/THREE.GEO-Geospatial-Mapping/wiki/Math)
The Math object will contain static helper methods to calculate geo spatial coordinates and projections.

#### [THREE.GEO.SpatialMap](https://github.com/scottbyrns/THREE.GEO-Geospatial-Mapping/wiki/SpatialMap)
SpatialMap is the entry point for any new mapping instances. It extends THREE.Mesh and provides some basic mapping extensions.

#### [THREE.GEO.GeoSymbol](https://github.com/scottbyrns/THREE.GEO-Geospatial-Mapping/wiki/GeoSymbol)
A GeoSymbol is an object representing a geo spatially positioned representation of an a data point or data set. THREE.GEO.GeoSymbol extends THREE.GEO.SpatialMap and can its self have 1:N GeoSymbols added to it.
