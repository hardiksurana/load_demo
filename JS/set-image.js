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
            var newSceneToLoad = SCENES.filter(function(scene){
                if(scene.name === loadSceneName){
                    return scene;
                }
            });

            if(newSceneToLoad.length > 0) {
                // animate cursor click
                document.querySelector('#cursor').emit('animate');

                // load current scene
                loadScene(newSceneToLoad);
            }
        });
    }
});
