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
/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    el.addEventListener("click", function (event) {
        var loadSceneName = this.parentEl.dataset.src;

        var sceneToLoad = SCENES.filter(function(scene){
            if(scene.name === loadSceneName){
                return scene;
            }
        });

        if(sceneToLoad.length > 0) {
            document.querySelector('#cursor').emit('animate');
            var position = getReticlePosition();
            document.querySelector('#loader_entity').setAttribute('position',`${position.x} ${position.y} ${position.z}`);

            removeHotspots();

            if(ImgSet.has(loadSceneName)) {
                console.log("animation shown. image already downloaded");
                // fadeAnimation(1, 0);
            } else {
                console.log("loader shown. image downloaded now.");
                document.querySelector('#loader_entity').setAttribute('visible', true);
                document.querySelector('a-sky').setAttribute('color','#293f59');
            }

            loadScene(sceneToLoad[0].name, this);
        }
    });
  },


  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
});


AFRAME.registerComponent('update-raycaster', {
  schema: {type: 'selector'},

  init: function () {
    var raycasterEl = this.data;
    raycasterEl.components.raycaster.refreshObjects();
  }
});
