import {taskWizardComponent} from "./taskWizard.component";
import {TaskWizardService} from "./taskWizard.service";
import IAngularStatic = angular.IAngularStatic;


declare const angular:angular.IAngularStatic;


export const taskWizardModule = angular
    .module('taskWizardpModule',[
        'ngMaterial'
    ])
    .component('taskWizard',taskWizardComponent)
    .service('TaskWizardService',TaskWizardService);

