/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file

var logController = (function () {
    function logController($log, $scope, $http, $resource) {
        var _this = this;
        this.$log = $log;
        this.$scope = $scope;
        this.$http = $http;
        this.$resource = $resource;
        $scope.logCall = function (logMethod) {
            return _this.logCall(logMethod);
        };
    }
    logController.prototype.logCall = function (logMethod) {
        switch (logMethod) {
            case 'debug':
                this.$log.debug();
                break;

            case 'error':
                this.$log.error();
                break;

            case 'warn':
                this.$log.warn();
                break;
        }
    };
    logController.controllerId = "logController";
    return logController;
})();

// Update the app1 variable name to be that of your module variable
app.controller(logController.controllerId, [
    '$log', '$scope', '$http', '$resource', function ($log, $scope, $http, $resource) {
        return new logController($log, $scope, $http, $resource);
    }
]);
//# sourceMappingURL=logController.js.map
