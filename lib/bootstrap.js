define([
], function(
) {
    "use strict";
    var setup = {
    //    baseUrl: 'lib' should be already set by the file that includes this file
        paths: {
            'opentype': 'bower_components/opentype.js/dist/opentype'
          , 'Atem-CPS-whitelisting': 'bower_components/Atem-CPS-whitelisting/lib'
          , 'Atem-Errors': 'bower_components/Atem-Errors/lib'
          , 'Atem-Math-Tools': 'bower_components/Atem-Math-Tools/lib'
          , 'Atem-Pen-Case': 'bower_components/Atem-Pen-Case/lib'
        }
    };
    require.config(setup);
    return require;
});
