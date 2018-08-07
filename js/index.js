'use strict';

(function(module){
    let App = module.App;
    let root = document.getElementById('root'); //html file will be pretty much blank except for this

    let app = new App();
    root.appendChild(app.render());

})(window.module = window.module || {});