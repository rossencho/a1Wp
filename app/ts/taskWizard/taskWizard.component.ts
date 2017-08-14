
import IComponentOptions= angular.IComponentOptions; 


class TaskWizardComponent{




}

export const taskWizardComponent: IComponentOptions = {
    controller: TaskWizardComponent,
    template: `
    <div>
        <h1>Task Wizard</h1>
        <button ng-click="vm.onClose()">Close</button>
   </div>`,
   controllerAs:"vm",
   bindings:{
       onClose:'&'
   }
    
};