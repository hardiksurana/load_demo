/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
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
                loadScene(sceneToLoad);
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
