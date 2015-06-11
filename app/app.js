angular.module('cobaa', [])
    .controller('cobaController1', cobaController1);

    function cobacontroller() {
        this.visible = true;

        this.toggle = function() {
            this.visible = !this.visible;
        };
    }