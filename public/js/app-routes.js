app.config(['$routeProvider', '$controllerProvider', '$locationProvider',
    function($routeProvider, $controllerProvider, $locationProvider) {
        app.controller = $controllerProvider.register;

        // this script uses scriptjs.js library to dynamicaly download files
        app.resolveScriptDeps = function(dependencies) {
            return function($q, $rootScope) {
                var deferred = $q.defer();
                $script(dependencies, function() {
                    // all dependencies have now been loaded by $script.js so resolve the promise
                    $rootScope.$apply(function() {
                        deferred.resolve();
                    });
                });
                return deferred.promise;
            }
        };

        // we use resolveScriptDeps to dynamically download controller just when its needed
        $routeProvider
            .when('/', {
                templateUrl: '/views/index.html',
                controller: 'IndexPageController',
                controllerAs: 'indexCtrl',
                resolve: {
                    deps: app.resolveScriptDeps([
                        '/js/controllers/IndexPageController.js'
                    ])
                }
            });


        // это по-идее должно приводить в порядок адресную строку,
        // но там что-то работает не так как нужно
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});
    }
]);
