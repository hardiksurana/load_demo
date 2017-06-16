/**
 * implements fadeIn and fadeOut animation between scenes based on parameters passes
 * @param  {[Number]} opacity_old old opacity value
 * @param  {[Number]} opacity_new new opacity value
 */
function fadeAnimation(opacity_old, opacity_new, animation_time){
    var entities = document.querySelectorAll('a-entity');
    var sky = document.querySelectorAll('a-sky');

 	for(var i=0; i<entities.length; i++){
 		if(validEntity(entities[i]))
 			entities[i].setAttribute('material','opacity', opacity_old);
 	}

 	for(var i=0; i<sky.length; i++){
 		if(validEntity(sky[i]))
 			sky[i].setAttribute('material','opacity', opacity_old);
 	}

 	for(var i=0; i<entities.length; i++){
        var myAnimate = document.createElement('a-animation');
 		if(validEntity(entities[i])){
     	    myAnimate.setAttribute('attribute', 'material.opacity');
     	    myAnimate.setAttribute('to', opacity_new.toString());
     	    myAnimate.setAttribute('beign', "fade");
            myAnimate.setAttribute('dur', animation_time.toString());
     	    entities[i].emit('fade');
            entities[i].appendChild(myAnimate);
 		}
 	}

 	for(var i=0; i<sky.length; i++){
        var myAnimate = document.createElement('a-animation');
 		if(validEntity(sky[i])){
     	    myAnimate.setAttribute('attribute', 'material.opacity');
     	    myAnimate.setAttribute('to', opacity_new.toString());
     	    myAnimate.setAttribute('beign', "fade");
            myAnimate.setAttribute('dur', animation_time.toString());
     	    sky[i].appendChild(myAnimate);
     	    sky[i].emit('fade');
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
