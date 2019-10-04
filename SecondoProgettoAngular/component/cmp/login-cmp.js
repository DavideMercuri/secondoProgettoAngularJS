angular.module("validaMod", [])
  .component("login", {
    templateUrl: 'component/tpl/login-tpl.html',

    controller: ['$scope', function($scope) {
      $scope.condizioni = [
        "I campi non devono essere vuoti",
        "Il campo nome deve avere una lunghezza maggiore di 5 caratteri",
        "Valida il form attraverso la direttiva ng-submit"
      ];
      $scope.submit = function(pName, pPassword, pForm) {

        // il form non manipolato è "pristine" quindi questa condizione verifica se i campi sono pieni
        if (pForm.$pristine || !pName || !pPassword) {
          alert("Devi compilare tutti i campi")

        } else if ($scope.user.password.lenght <= 5) {
          alert("Devi inserire almeno 5 caratteri per la password")

        } else {
          $scope.$emit('myEvent', $scope.user.name);
          $scope.user = "";
        }
      }
    }]
  });
