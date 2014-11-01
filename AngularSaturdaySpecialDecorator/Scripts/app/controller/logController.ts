/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file


interface IlogControllerScope extends ng.IScope {
  
    logCall: (logMethod) => void;
}

interface IlogController {
  
}

class logController implements IlogController {
    static controllerId: string = "logController";
    
    constructor(private $log:ng.ILogService,private $scope: IlogControllerScope, private $http: ng.IHttpService, private $resource: ng.resource.IResourceService) {
  
        $scope.logCall = (logMethod) => this.logCall(logMethod);
    }

    private logCall(logMethod) {
        switch(logMethod) {
        
            case 'debug': this.$log.debug();
                break;

            case 'error': this.$log.error();
                break;

            case 'warn': this.$log.warn();
                break;
        }
        
    }
}

// Update the app1 variable name to be that of your module variable
app.controller(logController.controllerId, ['$log','$scope', '$http', '$resource', ($log,$scope, $http, $resource) =>
    new logController($log,$scope, $http, $resource)
]);
