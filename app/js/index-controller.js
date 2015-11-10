angular.module('senai',[]);


angular.module('senai').controller('IndexController',IndexController);


function IndexController($scope){

    $scope.nome = 'Texto padrão';

    $scope.click = function(){
        $scope.nome = 'Texto alterado';
    }

    $scope.click2 = function(){
        $scope.nome = 'Texto padrão';
    }

}