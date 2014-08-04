
describe('TvListingsCtrlTest', function () {

    beforeEach(module('skyGoDevPairingTest'));

    beforeEach(inject(function ($rootScope, $controller) {

        this.scope = $rootScope.$new();

        $controller('TvListingsCtrl', {
            $scope: this.scope
        });

    }));

    afterEach(function () {

    });

    it('Should set controllerWorking on the scope', function () {
        expect(this.scope.controllerWorking).to.equal("Hello");
    });

});