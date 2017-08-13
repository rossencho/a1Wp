import {appModule} from "./module"

import IAngularStatic = angular.IAngularStatic;

declare const angular:IAngularStatic;

angular.element(()=>{
    angular.bootstrap(document,[
    appModule.name
    ]);
});
