import {tasksComponent} from "./tasks.component";
import {taskWizardModule} from "../taskWizard/taskWizard.module";
import IAngularStatic = angular.IAngularStatic;


declare const angular:angular.IAngularStatic;


export const tasksModule = angular
    .module('tasksModule',[
        'ngMaterial',
        taskWizardModule.name
    ])
    .component('tasks',tasksComponent);

