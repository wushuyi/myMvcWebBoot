//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'assets/js',
    paths: {
        require: 'libs/require-2.1.15',
        domReady: 'libs/domReady-2.0.1',
        jquery: 'libs/jquery-2.1.1',
        lodash: 'libs/lodash.compat-2.4.1',
        Backbone: 'libs/backbone-1.1.2',
        //Modernizr: 'libs/modernizr-3.0.0',
        localforage: 'libs/localforage-1.2.0',
        apps: 'apps'
    },
    shim: {
        'Modernizr': {
            exports: 'Modernizr'
        }
    }
});
