angular.module('senai',['ngMessages','ui.growl']);

angular.module('senai').controller('IndexController', IndexController);

IndexController.$inject = ['$scope', 'AlertService'];

function IndexController($scope, AlertService){
    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;

    function salvar(){
        if($scope.myForm.$invalid === true){

            AlertService.showAlert('Observe', 'Verifique os campos inválidos');

            return;
        }

        $scope.listaDePessoas.push($scope.entidade);

        limpar();

        AlertService.showOK('Ok', 'Gravação com sucesso!');
    }

    function limpar(){
        $scope.entidade = {};
    }

}