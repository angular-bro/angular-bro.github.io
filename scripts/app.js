define('app/angular-bro-github-io', ['exports', 'angular'], function (exports, _angular) {
  'use strict';

  exports['default'] = _angular['default'].module('angularBroGithubIo', []);
});
define('app/app', ['exports', 'angular', 'app/router', 'app/angular-bro-github-io'], function (exports, _angular, _appRouter, _appAngularBroGithubIo) {
    'use strict';

    var app = _angular['default'].module('app', ['router', _appAngularBroGithubIo['default'].name]);

    _angular['default'].element(document).ready(function () {
        _angular['default'].bootstrap(document, [app.name], {
            strictDi: true
        });
    });
});
define('app/router', ['exports', 'angular', 'config/environment'], function (exports, _angular, _configEnvironment) {
    'use strict';

    _angular['default'].module('router', []).config(["$locationProvider", function ($locationProvider) {
        "ngInject";
        "use strict";

        $locationProvider.html5Mode(_configEnvironment['default'].html5Mode);
    }]);
});
define("app/scripts/templates", ["exports"], function (exports) {
  "use strict";

  angular.module("templates-app", []);
  angular.module("templates-app").run(['$templateCache', function (a) {}]); //# sourceMappingURL=templates.map
});
require("app/app");
//# sourceMappingURL=app.map