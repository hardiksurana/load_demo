/**
 * implements fadeIn and fadeOut animation between scenes based on parameters passes
 * @param  {[Number]} opacity_old old opacity value
 * @param  {[Number]} opacity_new new opacity value
 */
function fadeAnimation(opacity_old, opacity_new, animation_time){
    var entities = document.querySelectorAll('a-entity');
    var sky = document.querySelectorAll('a-sky');

    document.querySelectorAll('a-animation').forEach(function(animate){
        animate.parentNode.removeChild(animate);
    });

 	for(var i=0; i<entities.length; i++){
 		if(validEntity(entities[i]))
 			entities[i].setAttribute('material', 'opacity', opacity_old);
 	}

 	for(var i=0; i<sky.length; i++){
 		if(validEntity(sky[i]))
 			sky[i].setAttribute('material', 'opacity', opacity_old);
 	}

    var myAnimate = document.createElement('a-animation');
    myAnimate.setAttribute('attribute', 'material.opacity');
    myAnimate.setAttribute('to', opacity_new.toString());
    myAnimate.setAttribute('dur', animation_time.toString());

 	for(var i=0; i<entities.length; i++){
 		if(validEntity(entities[i])){
            entities[i].appendChild(myAnimate);
 		}
 	}

 	for(var i=0; i<sky.length; i++){
 		if(validEntity(sky[i])){
            sky[i].appendChild(myAnimate);
 		}
 	}
}


/**
 * checks validity of an entity
 * @param  {[<a-entity>]} entity aframe entity tag
 * @return {Boolean}        returns true if entity is valid
 */
function validEntity(entity){
    return 	!(entity.id === 'cameraWrapper' ||
        entity.id == "pointLight" ||
        entity.id === "dirLight" ||
		entity.attributes[0].nodeName === 'camera' ||
		entity.id === 'cursor' ||
		entity.id === 'camera' ||
		entity.className === "hotspotClass" ||
		entity.className === "ignoreHotspot");
}
