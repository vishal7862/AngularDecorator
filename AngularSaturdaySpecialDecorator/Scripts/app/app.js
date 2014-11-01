/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the reference paths,
// then adjust the path value to be relative to this file

// Create the module and define its dependencies.
var app = angular.module('app', [
    'ngResource',
    'ngRoute'
]);

// Execute bootstrapping code and any dependencies.
app.run([
    '$q', '$rootScope', function ($q, $rootScope) {
    }]);

app.config([
    "$provide", function ($provide) {
        // Use the `decorator` solution to substitute or attach behaviors to
        // original service instance; @see angular-mocks for more examples....
        $provide.decorator('$log', [
            "$delegate", function ($delegate) {
                // Save the original $log.debug()
                var debugFn = $delegate.debug;
                var errorFn = $delegate.error;
                var warnFn = $delegate.warn;
                $delegate.debug = function () {
                    var args = [].slice.call(arguments), now = new Date();

                    // Prepend timestamp
                    args[0] = now + "Hello";

                    // Call the original with the output prepended with formatted timestamp
                    debugFn.apply(null, args);
                    // console.log(args);
                };

                $delegate.error = function () {
                    var args = [].slice.call(arguments), now = new Date();

                    // Prepend timestamp
                    args[0] = now + "error";

                    // Call the original with the output prepended with formatted timestamp
                    errorFn.apply(null, args);
                    //console.log(args);
                };

                $delegate.warn = function () {
                    var args = [].slice.call(arguments), now = new Date();

                    // Prepend timestamp
                    args[0] = now + "Warn";

                    // Call the original with the output prepended with formatted timestamp
                    warnFn.apply(null, args);
                    // console.log(args);
                };

                return $delegate;
            }
        ]);
    }
]);
//# sourceMappingURL=app.js.map
