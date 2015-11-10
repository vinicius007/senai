angular.module('senai').service('AlertService', AlertService);

AlertService.$inject = ['$growl'];

function AlertService($growl) {
    this.showOK = showOK;
    this.showError = showError;
    this.showAlert = showAlert;
    this.showInfo = showInfo;


    function showOK(titulo, mensagem, tempo) {
        if(!tempo)
            tempo = 3000;

        $growl.box(titulo, mensagem, {
            class: 'success',//verde
            timeout: tempo
        }).open();
    }

    function showError(titulo, mensagem, tempo) {
        if(!tempo)
            tempo = 3000;

        $growl.box(titulo, mensagem, {
            class: 'danger',//vermelho
            timeout: 3000
        }).open();
    }

    function showAlert(titulo, mensagem, tempo) {
        if(!tempo)
            tempo = 3000;

        $growl.box(titulo, mensagem, {
            class: 'warning',//laranja
            timeout: 3000
        }).open();
    }

    function showInfo(titulo, mensagem, tempo) {
        if(!tempo)
            tempo = 3000;

        $growl.box(titulo, mensagem, {
            class: 'primary',//azul
            timeout: 3000
        }).open();
    }
}