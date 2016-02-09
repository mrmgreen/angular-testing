describe('Controller test', function() {

  var passpromise;

  beforeEach(module('skyGoDevPairingTest'));
  var scope, mockTvListingSvc, $controller;

  beforeEach(module(function($provide) {
    $provide.factory('TvListingSvc', function() {

      function getNames() {
        if (passpromise) {
          return 'good';
        } else {
          return 'no good';
        }
      }
      return {
        getNames: getNames
      }

    });
  }));

  beforeEach(inject(function(_$rootScope_, _$controller_, TvListingSvc) {
    scope = _$rootScope_.$new();
    mockTvListingSvc = TvListingSvc;
    //spyOn(mockTvListingSvc, 'getNames').and.callThrough();
    $controller = _$controller_;

  }));

  it('testing controllerWorking', function() {
    $controller('TvListingsCtrl', {
      $scope: scope,
      TvListingSvc: mockTvListingSvc
    });
    expect(scope.controllerWorking).toBe('Hello');
  });

  it('testing names', function() {
    passpromise = true;
    $controller('TvListingsCtrl', {
      $scope: scope,
      TvListingSvc: mockTvListingSvc
    });
    scope.$digest();
    expect(scope.names).toBe('good');
  });

  it('testing names', function() {
    passpromise = false;
    $controller('TvListingsCtrl', {
      $scope: scope,
      TvListingSvc: mockTvListingSvc
    });
    scope.$digest();
    expect(scope.names).toBe('no good');
  });
});