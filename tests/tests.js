/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true, immed:true, newcap:true, noarg:true,
 noempty:true, nonew:true, undef:true, strict:true, browser:true, nomen:true, white:true */

/*globals
 Modernizr: false
 */

/*exported
 */
var jsDirectory =  '../public/javascripts/';

Modernizr.load([
	{
		load: [
			jsDirectory + 'vendors/angular/angular.js',
			jsDirectory + 'vendors/angular-route/angular-route.js',
            jsDirectory + 'vendors/mocha/mocha.js',
			jsDirectory + 'vendors/chai/chai.js',
            jsDirectory + 'vendors/sinon/lib/sinon.js',
            jsDirectory + 'vendors/sinon/lib/sinon/match.js',
            jsDirectory + 'vendors/sinon/lib/sinon/call.js',
            jsDirectory + 'vendors/sinon/lib/sinon/spy.js',
            jsDirectory + 'vendors/sinon/lib/sinon/stub.js',
            jsDirectory + 'vendors/sinon/lib/sinon/mock.js',
            jsDirectory + 'vendors/sinon/lib/sinon/util/fake_timers.js',

            // GENERAL UTILITY FUNCTIONS
            './testUtilities.js',

            //CONFIG MOCHA
			'./mochaConfig.js',

            jsDirectory + 'vendors/angular-mocks/index.js',

            jsDirectory + 'app.js',

            //FILES TO TEST
            jsDirectory + 'controllers/TvListingsCtrl.js',
            jsDirectory + 'models/TvListingsSvc.js',


            /*** These files can be in any order ***/


            //SPEC TESTS
            './controllers/TvListingsCtrlTest.js',
            './models/TvListingsSvcTest.js',

			//RUN MOCHA
			'mochaRun.js'

		]
	}
]);

