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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
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
				],
            download: false
			}
		];


var currentScene = '';
var ImgSet = new Set();

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
 * Search for hotspots from curren scene
 * get ID and src for each hotspot
 * add the images to <a-assets>
 * set download flag as true to prevent re-download
 */
var preloadImage = function(hotspot) {
    var num = findScene(hotspot.connected);
    if(SCENES[num].download == false) {
        var img = new Image();
        var newSceneId = hotspot.connected;
        img.src = hotspot.src;
        img.id = newSceneId;

        document.querySelector('a-assets').appendChild(img);

        document.querySelector('#' + newSceneId).addEventListener('load', function() {
            SCENES[num].download = true;
            ImgSet.add(newSceneId);
        });
    }
}

/**
 * renders a hotspot on current scene
 * adds the hotspots to <a-scene />
 * @param  {[String]} hotspot [hotspot to be rendered]
 */
var renderHotspot = function(hotspot){
	var entity = document.createElement('a-entity');
	entity.setAttribute('template','src: #link');
	entity.setAttribute('data-thumb','#hotspot');
	entity.setAttribute('data-src',hotspot.connected);
	entity.setAttribute('data-title',hotspot.connected);
	entity.setAttribute('position',hotspot.position);
	entity.setAttribute('rotation',hotspot.rotation);
	entity.setAttribute('class','hotspotClass');
	document.querySelector('a-scene').append(entity);
}


var renderAnimationOrLoader = function(sceneName) {
    if(ImgSet.has(sceneName)) {
        fadeAnimation(1, 0, 1000);
        fadeAnimation(0, 1, 1000);
    } else {
        document.querySelector('a-sky').setAttribute('color', '');
        document.querySelector('#loader_entity').setAttribute('visible', false);
    }

    document.querySelector('a-sky').removeEventListener('materialtextureloaded', renderAnimationOrLoader);
}



/**
 * loads a new scene by replacing old scene and replacing hotspots
 * @param  {[String]} sceneName  [new scene]
 * @param  {[String]} loadedFrom [old scene]
 */
var loadScene = function(sceneName,loadedFrom){
	currentScene = sceneName;

    var sceneToLoad = SCENES.filter(function(scene){
        if(scene.name === currentScene){
            return scene;
        }
    });

    if(sceneToLoad.length > 0) {
        var sky = document.querySelector('a-sky');
        sky.setAttribute('src',"#" + sceneToLoad[0].name);

        sceneToLoad[0].hotspots.map(function(hotspot){
            renderHotspot(hotspot);
            preloadImage(hotspot);
        });

        sky.addEventListener('materialtextureloaded', function(){
            renderAnimationOrLoader(sceneToLoad[0].name);
        });
    }

/*
	SCENES.map(function(scene){
		if(scene.name === sceneName){
            var sky = document.querySelector('a-sky');
            sky.setAttribute('src',"#" + scene.name);

            scene.hotspots.map(function(hotspot){
                renderHotspot(hotspot);
                preloadImage(hotspot);
            });

            sky.addEventListener('materialtextureloaded', function () {
                    if(ImgSet.has(sceneName)) {
                        fadeAnimation(0, 1, 1000);
                    } else {
                        sky.setAttribute('color', '');
                        document.querySelector('#loader_entity').setAttribute('visible', false);
                    }
              });
		}
	});
*/

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
      return e
}


/**
 * plays required audio on rendering first scene
 */
var startExp = function(){
    document.querySelector('#startScreen').emit('start');
    document.querySelector('#startScreen').setAttribute('visible',false);
    document.querySelector('#startScreen2').setAttribute('visible',false);

    var position = getReticlePosition();
    document.querySelector('#loader_entity').setAttribute('position',`${position.x} ${position.y} ${position.z}`);
    document.querySelector('#loader_entity').setAttribute('visible', true);
    document.querySelector('a-sky').setAttribute('color','#293f59');

	document.querySelector('#welcomeScapic').play();
	document.querySelectorAll('.experienceScreen').forEach(function(value){
		value.setAttribute('visible',true);
	});

	loadScene('houseEntrance');
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
	document.querySelector('#ScapicAbout').setAttribute('visible',true);
	document.querySelector('a-sky').setAttribute('src','');
	document.querySelector('a-sky').setAttribute('color','#293f59');
}

/**
 * shows LiveUp info on hover over logo
 */
var showAboutMachani = function(){
	removeHotspots();
	hideLogos();
	document.querySelector('#MachaniAbout').setAttribute('visible',true);
	document.querySelector('a-sky').setAttribute('src','');
	document.querySelector('a-sky').setAttribute('color','#293f59');
}

/**
 * returns to the experienceScreen
 */
var goBackFromAboutScreen = function(){
	loadScene(currentScene);
	showLogos();
	document.querySelector('#ScapicAbout').setAttribute('visible',false);
	document.querySelector('#MachaniAbout').setAttribute('visible',false);
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
