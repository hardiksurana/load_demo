var SCENES = [
		{
		name:'houseEntrance',
		pano:'#house_entrance',
		hotspots: [
				{
					id:'hall_H',
					connected: 'hall',
					position: "-10.8 -0.7836511050129384 6.393604706111482",
					rotation: "0 -60 0",
                    src: "./assets/panos/hall.jpg"
				}
			]
		},
		{
		name:'hall',
		pano:'#hall',
		hotspots: [
				{
					id:'livingRoom_H',
					connected: 'livingRoom',
					position: "-13 -0.7836511050129384 6.393604706111482",
					rotation: "0 -60 0",
					src: "./assets/panos/livingRoom.jpg"
				},
				{
					id:'diningRoom_H',
					connected: 'diningRoom',
					position: "-9.33 -2.54 -7.16",
					rotation: "0 -140 0",
					src: "./assets/panos/diningRoom.jpg"
				}
			]
		},
		{
		name:'livingRoom',
		pano:'#living_room',
		hotspots: [
				{
					id:'diningRoom_H',
					connected: 'diningRoom',
					position: "-12.8 -0.9 1.82",
					rotation: "0 -60 0",
					src: "./assets/panos/diningRoom.jpg"
				}
			]
		},
		{
		name:'diningRoom',
		pano:'#dining_room',
		hotspots: [
				{
					id:'kitchen_H',
					connected: 'kitchen',
					position: "-15 -0.103 3.383",
					rotation: "0 -60 0",
					src: "./assets/panos/kitchen.jpg"
				},
				{
					id:'bedroomTwo_H',
					connected: 'bedRoomTwo',
					position: "14.48 1.253 11.65",
					rotation: "0 47.61 0",
					src: "./assets/panos/bedroomTwo.jpg"
				},
				{

					id:'bedroomOne_H',
					connected: 'bedRoomOne',
					position: "11.79 -0.20 14.34",
					rotation: "0 34.66 0",
					src: "./assets/panos/bedroomOne.jpg"
				},
				{
					id:'guestRoom_H',
					connected: 'guestRoom',
					position: "13.55 1.272 2.929",
					rotation: "0 93.5 0",
					src: "./assets/panos/guestRoom.jpg"
				}
			]
		},
		{
		name:'kitchen',
		pano:'#kitchen',
		hotspots: [
				{
					id:'diningRoom_H',
					connected: 'diningRoom',
					position: "9.229 -0.31 10.36",
					rotation: "0 -137 0",
					src: "./assets/panos/diningRoom.jpg"
				}
			]
		},
		{
		name:'bedRoomTwo',
		pano:'#bedroom_two',
		hotspots: [
				{
					id:'corridorView_H',
					connected: 'CorridorView',
					position: "5.687 -1.92 11.44",
					rotation: "0 36.84 0",
					src: "./assets/panos/CorridorView.jpg"
				},
				{
					id:'bedroomTwoAnotherView_H',
					connected: 'bedRoomTwoViewTwo',
					position: "7.02 -1.92 -11.8",
					rotation: "0 143.2 0",
					src: "./assets/panos/bedroomTwoAnotherView.jpg"
				},{
					id:'bedroomTwoBathroom_H',
					connected: 'bedRoomTwoBathroom',
					position: "-14.0 -1.92 -10.8",
					rotation: "0 -128.0 0",
					src: "./assets/panos/bedroomTwoBathroomView.jpg"
				}
			]
		},
		{
		name:'bedRoomTwoViewTwo',
		pano:'#bedroom_two_view2',
		hotspots: [
				{
					id:'bedroomTwo',
					connected: 'bedRoomTwo',
					position: "-8.91 -1.92 11.85",
					rotation: "0 -41.8 0",
					src: "./assets/panos/bedroomTwo.jpg"
				}
			]
		},
		{
		name:'bedRoomTwoBathroom',
		pano:'#bedroom_two_bathroom',
		hotspots: [
				{
					id:'corridorView_H',
					connected: 'CorridorView',
					position: "10.45 1.033 13.56",
					rotation: "0 51.39 0",
					src: "./assets/panos/CorridorView.jpg"
				}
			]
		},
		{
		name:'bedRoomOne',
		pano:'#bedroom_one',
		hotspots: [
				{
					id:'bedRoomOneBathroom_H',
					connected: 'bedRoomOneBathroom',
					position: "-8.10 -0.75 4.833",
					rotation: "0 -57.8 0",
					src: "./assets/panos/bedroomOneBathroom.jpg"
				},
				{
					id:'corridorView_H',
					connected: 'CorridorView',
					position: "-15.9 0.232 1.012",
					rotation: "0 -80.3 0",
					src: "./assets/panos/CorridorView.jpg"
				}
			]
		},
		{
		name:'bedRoomOneBathroom',
		pano:'#bedroom_one_bathroom',
		hotspots: [
				{
					id:'bedroomOne_H',
					connected: 'bedRoomOne',
					position: "6.363 0.055 -6.06",
					rotation: "0 126.2 0",
					src: "./assets/panos/bedroomOne.jpg"
				}
			]
		},
		{
		name:'guestRoom',
		pano:'#guest_room',
		hotspots: [
				{
					id:'corridorView_H',
					connected: 'CorridorView',
					position: "11.61 -0.27 2.413",
					rotation: "0 104 0",
					src: "./assets/panos/CorridorView.jpg"
				}
			]
		},
		{
		name:'commonBathRoom',
		pano:'#common_bathroom',
		hotspots: [
				{
					id:'diningRoom_H',
					connected: 'diningRoom',
					position: "-0.01 -1.92 -10.7",
					rotation: "0 -180 0",
					src: "./assets/panos/diningRoom.jpg"
				}
			]
		},
		{
		name:'CorridorView',
		pano:'#corridor_view',
		hotspots: [
				{
					id:'guestRoom_H',
                    connected : 'guestRoom',
					position:'-4.85 -0.83 -6.33',
					rotation: '0.0 -147.0 0.0',
                    src: "./assets/panos/guestRoom.jpg"
				},{
					id:'commonBathRoom_H',
                    connected : 'commonBathRoom',
					position:'5.95 0.812 8.691',
					rotation: '0 35.06 0',
                    src: "./assets/panos/commonBathroom.jpg"
				},{
					id:'bedRoomTwo_H',
                    connected : "bedRoomTwo",
					position:"11.29 -1.33 -18.2",
					rotation:"0 156.3 0",
                    src: "./assets/panos/bedroomTwo.jpg"
				},{
					id:'bedRoomOne_H',
                    connected : "bedRoomOne",
					position:"14.43 1.48 -11.3",
					rotation:"0 137.6 0",
                    src: "./assets/panos/bedroomOne.jpg"
				},{
					id:'hall',
                    connected : "hall",
					position:"-10.7 -1.57 9.476",
					rotation:"0 -50.3 0",
                    src: "./assets/panos/hall.jpg"
				}
			]
		}
	];


var currentSceneName = '';
var ImgSet = new Set();
var LoaderShown = false;


/**
 * downloads subsequent scene's hotspots
 * @param  {[Array]} nextSceneHotspots [contains current scene's hotspots]
 */
var DownloadRemainingAssets = function(nextSceneHotspots) {
    nextSceneHotspots.map(function(nextSceneHotspot) {
        var hotspotSceneToLoad = SCENES.filter(function(scene) {
            if(scene.name === nextSceneHotspot.connected) {
                return scene;
            }
        });

        hotspotSceneToLoad[0].hotspots.map(function(newHotspot) {
            if(!ImgSet.has(newHotspot.connected)) {
                var newimg = new Image();
                var newId = newHotspot.id;
                newimg.src = newHotspot.src;
                newimg.id = newId;

                document.querySelector('a-assets').appendChild(newimg);
                document.querySelector('#' + newId).addEventListener('load', function() {
                    ImgSet.add(newId);
                });
            } else {
                console.log('image already downloaded.');
            }
        });
    });
}


/**
 * finds scene in SCENES json array
 * @param  {[String]} sceneName [name of scene]
 */
var findScene = function(sceneName) {
    var count = 0;
    var countFinal = 0;
    SCENES.map(function(scene){
        if(scene.name !== sceneName){
            count = count + 1;
        } else {
            countFinal = count;
        }
    });
    return countFinal;
}


/**
 * preload next scene's images and add them to a-assets
 */
var preloadImage = function(hotspot) {
    var newSceneId = hotspot.connected;
    // var num = findScene(newSceneId);
    if(!ImgSet.has(newSceneId)) {
        var img = new Image();
        img.src = hotspot.src;
        img.id = newSceneId;

        document.querySelector('a-assets').appendChild(img);
        document.querySelector('#' + newSceneId).addEventListener('load', function() {
            ImgSet.add(newSceneId);
        });
    }
}


/**
 * renders a hotspot on current scene and loads them to <a-scene />
 * @param  {[String]} hotspot [hotspot to be rendered]
 */
var renderHotspot = function(hotspot){
	var entity = document.createElement('a-entity');
	entity.setAttribute('template', 'src: #link');
	entity.setAttribute('data-thumb', '#hotspot');
	entity.setAttribute('data-src', hotspot.connected);
	entity.setAttribute('data-title', hotspot.connected);
	entity.setAttribute('position', hotspot.position);
	entity.setAttribute('rotation', hotspot.rotation);
	entity.setAttribute('class', 'hotspotClass');
	document.querySelector('a-scene').append(entity);
}


/**
 * displays animations for sky
 * @param  {[json]}    tempScene [contains json data for current scene]
 * @return {[Promise]}           [promise to execute other events synchronously]
 */
var renderAnimations = function (tempScene) {
    var promise = new Promise(function (resolve, reject) {
        var callback = function renderAnimationOrLoader() {
            // show animation or remove loader
                if(LoaderShown === false) {
                    fadeAnimation(1, 0, 1000);
                    fadeAnimation(0, 1, 1000);
                }
                else {
                    document.querySelector('a-sky').setAttribute('color', '');
                    var loader = document.querySelector("#loader_entity");
                    loader.parentNode.removeChild(loader);
                    LoaderShown = false;
                }

            document.querySelector('a-sky').removeEventListener('materialtextureloaded', callback);

            // calls preloadAndRender
            if(tempScene.length > 0) {
                resolve(tempScene);
            } else {
                reject('tempScene is empty.');
            }
        }.bind(tempScene);

        document.querySelector('a-sky').addEventListener('materialtextureloaded', callback);
    });
    return promise;
}

/**
 * loads a new scene by replacing old scene and replacing hotspots
 * @param  {[String]} sceneName  [new scene]
 * @param  {[String]} loadedFrom [old scene]
 */
var loadScene = function(tempScene) {
	currentSceneName = tempScene[0].name;
    var sky = document.querySelector('a-sky');
    if(tempScene.length > 0) {
        // remove old scene's hotspots
        removeHotspots();

        // set source of new scene in sky
        sky.setAttribute('src', "#" + currentSceneName);

        // show loader if requried
        if(!ImgSet.has(currentSceneName)) {
            setLoader();
        }

        // contains promise for loading of sky and showing animations
        renderAnimations(tempScene)
            .then(function(tempScene) {
                tempScene[0].hotspots.map(function(hotspot){
                    renderHotspot(hotspot);
                    preloadImage(hotspot);
                });
                console.log('complete immediate scenes images');
                return tempScene;
            })
            .then(function(tempScene) {
                console.log('calling DownloadRemainingAssets.');
                DownloadRemainingAssets(tempScene[0].hotspots);
                console.log('completed downloading all subsequent assets.');
            })
            .catch(function(err) {
                console.log('Catch: ', err);
            });
    }
}

/**
 * removes all hotspots of old scene
 */
var removeHotspots = function(){
	document.querySelectorAll('.hotspotClass').forEach(function(hotspot){
		hotspot.parentNode.removeChild(hotspot);
	});
}


/**
 * gets current position of cursor
 * @return {[json]} [array of position coordinates]
 */
var getReticlePosition = function(){
      var e;
      var t = document.querySelector("#camera").object3D,
      n = new THREE.Vector3(t.position.x,t.position.y,t.position.z);
      e = new THREE.Vector3(0,0,(-10)),
      e.addVectors(e, n),
      e.applyAxisAngle(new THREE.Vector3(0,0,1), t.rotation._z),
      e.applyAxisAngle(new THREE.Vector3(1,0,0), t.rotation._x),
      e.applyAxisAngle(new THREE.Vector3(0,1,0), t.rotation._y)
      return e;
}


/**
 * if asset is not downloaded, it shows the loader
 */
var setLoader = function() {
    // create loader entity here
    var loaderEntity = document.createElement('a-entity');

    loaderEntity.setAttribute("id", "loader_entity");
    loaderEntity.setAttribute('geometry', {
        primitive: 'box',
        width: 1.5,
        height: 1.5,
        depth: 1.5
    });

    var position = getReticlePosition();
    loaderEntity.setAttribute('position', `${position.x} ${position.y} ${position.z}`);

    loaderEntity.setAttribute('material', {
        shader: 'gif',
        src: '#loader'
    });
    loaderEntity.setAttribute('scale', '1.0 1.0 1.0');
    loaderEntity.setAttribute('visible', true);


    var animation = document.createElement('a-animation');
    animation.setAttribute('attribute', 'rotation');
    animation.setAttribute('dur', '10000');
    animation.setAttribute('fill', 'forwards');
    animation.setAttribute('to', '0 360 0');
    animation.setAttribute('repeat', 'indefinite');
    animation.setAttribute('easing', 'linear');

    // append loaderEntity to scene
    loaderEntity.appendChild(animation);
    document.querySelector('a-scene').appendChild(loaderEntity);
    document.querySelector('a-sky').setAttribute('color', '#293f59');
    LoaderShown = true;
}


/**
 * plays required audio on rendering first scene
 */
var startExp = function(){
    var sceneToLoad = SCENES.filter(function(scene){
        if(scene.name === 'houseEntrance'){
            return scene;
        }
    });

    document.querySelector('#startScreen').emit('start');
    document.querySelector('#startScreen').setAttribute('visible',false);
    document.querySelector('#startScreen2').setAttribute('visible',false);

	document.querySelector('#welcomeScapic').play();
	document.querySelectorAll('.experienceScreen').forEach(function(value){
		value.setAttribute('visible',true);
	});

    document.querySelector('#houseEntrance').addEventListener('load', function() {
        ImgSet.add('houseEntrance');
    });

    loadScene(sceneToLoad);
}

/**
 * renders home scene
 */
var closeExp = function(){
	removeHotspots();
	document.querySelector('#startScreen').setAttribute('visible',true);
	document.querySelector('#startScreen2').setAttribute('visible',true);
	document.querySelector('#ScapicAbout').setAttribute('visible',false);
	document.querySelector('#MachaniAbout').setAttribute('visible',false);
	document.querySelector('a-sky').setAttribute('color','');
	document.querySelector('a-sky').setAttribute('src','#start');
	document.querySelectorAll('.experienceScreen').forEach(function(value){
		value.setAttribute('visible',false);
	});
}


/**
 * shows scapic info on hover over logo
 */
var showAboutScapic = function(){
	removeHotspots();
	hideLogos();
	document.querySelector('#ScapicAbout').setAttribute('visible', true);
	document.querySelector('a-sky').setAttribute('src', '');
	document.querySelector('a-sky').setAttribute('color','#293f59');
}

/**
 * shows LiveUp info on hover over logo
 */
var showAboutMachani = function(){
	removeHotspots();
	hideLogos();
	document.querySelector('#MachaniAbout').setAttribute('visible', true);
	document.querySelector('a-sky').setAttribute('src', '');
	document.querySelector('a-sky').setAttribute('color', '#293f59');
}

/**
 * returns to the experienceScreen
 */
var goBackFromAboutScreen = function(){
    var sceneToLoad = SCENES.filter(function(scene){
        if(scene.name === currentSceneName){
            return scene;
        }
    });
	document.querySelector('#ScapicAbout').setAttribute('visible',false);
	document.querySelector('#MachaniAbout').setAttribute('visible',false);
    document.querySelector('a-sky').setAttribute('color', '');
    showLogos();
    loadScene(sceneToLoad);
}

/**
 * hides all logos
 */
var hideLogos = function(){
	document.querySelector('#scapicLogo').setAttribute('visible',false);
	document.querySelector('#machaniLogo').setAttribute('visible',false);
	document.querySelector('#homeButtonLogo').setAttribute('visible',false);
}

/**
 * shows all logos
 */
var showLogos = function(){
	document.querySelector('#scapicLogo').setAttribute('visible',true);
	document.querySelector('#machaniLogo').setAttribute('visible',true);
	document.querySelector('#homeButtonLogo').setAttribute('visible',true);
}

/**
 * renders the experience upon loading of assets
 * TODO:
 * show loader on initial screen and when assets are downloaded
 * show fadeIn and fadeOut animation when assets are already downloaded
 */
$(document).ready(function(){
    document.addEventListener('contextmenu', event => event.preventDefault());
	document.querySelector('#startExperience').addEventListener('click',startExp);
	document.querySelector('#startExperience2').addEventListener('click',startExp);
	document.querySelector('.backFromAbout').addEventListener('click',goBackFromAboutScreen);
	document.querySelector('.backMachani').addEventListener('click',goBackFromAboutScreen);
	document.querySelector('.homeMachani').addEventListener('click',closeExp);
	document.querySelector('.homeScapic').addEventListener('click',closeExp);
	document.querySelector('.home').addEventListener('click',closeExp);
	document.querySelector('#scapicLogo').addEventListener('click',showAboutScapic);
	document.querySelector('#machaniLogo').addEventListener('click',showAboutMachani);

	var noSleep = new NoSleep();

    function enableNoSleep() {
	  noSleep.enable();
	  document.querySelector('#welcomeScapic').play();
	  document.querySelector('#welcomeScapic').pause();
	  console.log('nosleeping');
	  document.querySelector('.a-enter-vr-button').addEventListener('click', enableNoSleep, false);
	}
});
