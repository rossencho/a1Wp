import {appComponent} from "./app.component";
import {tasksModule} from "./tasks/tasks.module"
import {taskWizardModule} from "./taskWizard/taskWizard.module"
import IAngularStatic = angular.IAngularStatic;


declare const angular:angular.IAngularStatic;


export const appModule = angular
    .module('appModule',[
        'ngMaterial',
        tasksModule.name

    ])
    .component('app',appComponent);

