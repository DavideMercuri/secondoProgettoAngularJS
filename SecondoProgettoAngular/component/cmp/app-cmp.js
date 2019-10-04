angular.module("myApp", ["validaMod"])
.component("app", {
    templateUrl: 'component/tpl/app-tpl.html',

    controller: ['$scope', function($scope) {

        $scope.$on("myEvent", function(evt, data) {
          $scope.name = data;
          $scope.data = true;
        })
    }]
  });
