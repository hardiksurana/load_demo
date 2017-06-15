/**
 * implements fadeIn animation between scenes
 */
function fadeIn () {
    var entities = document.querySelectorAll('a-entity');
    var sky = document.querySelectorAll('a-sky');
	for(var i=0; i<entities.length; i++){
		if(validEntity(entities[i]))
			entities[i].setAttribute('material','opacity',0);
	}

	for(var i=0; i<sky.length; i++){
		if(validEntity(sky[i]))
			sky[i].setAttribute('material','opacity',0);
	}

	for(var i=0; i<entities.length; i++){
		if(validEntity(entities[i])){
			var myAnimate = document.createElement('a-animation');
			myAnimate.setAttribute('attribute','material.opacity');
			myAnimate.setAttribute('to',"1");
			myAnimate.setAttribute('beign',"fade");
			entities[i].appendChild(myAnimate);
			entities[i].emit('fade')
		}
	}

	for(var i=0; i<sky.length; i++){
		if(validEntity(sky[i])){
			var myAnimate = document.createElement('a-animation');
			myAnimate.setAttribute('attribute','material.opacity');
			myAnimate.setAttribute('to',"1");
			myAnimate.setAttribute('beign',"fade");
			sky[i].appendChild(myAnimate);
			sky[i].emit('fade')
		}
	}
}


/**
 * implements fadeOut animation between scenes
 */
function fadeOut(){
    var entities = document.querySelectorAll('a-entity');
    var sky = document.querySelectorAll('a-sky');

	for(var i=0; i<entities.length; i++){
		if(validEntity(entities[i]))
			entities[i].setAttribute('material','opacity',1);
	}

	for(var i=0; i<sky.length; i++){
		if(validEntity(sky[i])){
			console.log("entered");
			sky[i].setAttribute('material','opacity',1);
		}
	}

	for(var i=0; i<entities.length; i++){
		if(validEntity(entities[i])){
    		var myAnimate = document.createElement('a-animation');
    	    myAnimate.setAttribute('attribute','material.opacity');
    	    myAnimate.setAttribute('to',"0");
    	    myAnimate.setAttribute('beign',"fade");
    	    entities[i].appendChild(myAnimate);
    	    entities[i].emit('fade')
		}
	}

	for(var i=0; i<sky.length; i++){
		if(validEntity(sky[i])){
			var myAnimate = document.createElement('a-animation');
    	    myAnimate.setAttribute('attribute','material.opacity');
    	    myAnimate.setAttribute('to',"0");
    	    myAnimate.setAttribute('beign',"fade");
    	    sky[i].appendChild(myAnimate);
    	    sky[i].emit('fade')
		}
	}
}


/**
 * implements fadeIn and fadeOut animation between scenes based on parameters passes
 * @param  {[Number]} opacity_old old opacity value
 * @param  {[Number]} opacity_new new opacity value
 */
 function fadeAnimation(opacity_old, opacity_new){
     var entities = document.querySelectorAll('a-entity');
     var sky = document.querySelectorAll('a-sky');

 	for(var i=0; i<entities.length; i++){
 		if(validEntity(entities[i]))
 			entities[i].setAttribute('material','opacity', opacity_old);
 	}

 	for(var i=0; i<sky.length; i++){
 		if(validEntity(sky[i])){
 			console.log("entered");
 			sky[i].setAttribute('material','opacity', opacity_old);
 		}
 	}

 	for(var i=0; i<entities.length; i++){
 		if(validEntity(entities[i])){
     		var myAnimate = document.createElement('a-animation');
     	    myAnimate.setAttribute('attribute','material.opacity');
     	    myAnimate.setAttribute('to', opacity_new.toString());
     	    myAnimate.setAttribute('beign',"fade");
     	    entities[i].appendChild(myAnimate);
     	    entities[i].emit('fade')
 		}
 	}

 	for(var i=0; i<sky.length; i++){
 		if(validEntity(sky[i])){
 			var myAnimate = document.createElement('a-animation');
     	    myAnimate.setAttribute('attribute','material.opacity');
     	    myAnimate.setAttribute('to', opacity_new.toString());
     	    myAnimate.setAttribute('beign',"fade");
     	    sky[i].appendChild(myAnimate);
     	    sky[i].emit('fade')
 		}
 	}
}

/**
 * checks validity of an entity
 * @param  {[<a-entity>]} entity aframe entity tag
 * @return {Boolean}        returns true if entity is valid
 */
function validEntity(entity){
    return 	!(entity.id === 'cameraWrapper' || entity.id == "pointLight" || entity.id === "dirLight" ||
		entity.attributes[0].nodeName === 'camera' ||
		entity.id === 'cursor' ||
		entity.id === 'camera' ||
		entity.className === "hotspotClass" ||
		entity.className === "ignoreHotspot");
}
