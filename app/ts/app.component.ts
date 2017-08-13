import IComponentOptions = angular.IComponentOptions;

class AppComponent {}

export const appComponent: IComponentOptions = {
    controller: AppComponent  ,
    template:`<tasks></tasks>` 
};