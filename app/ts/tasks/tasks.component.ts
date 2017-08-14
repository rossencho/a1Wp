
import IComponentOptions = angular.IComponentOptions;
import {ITaskWizardService} from "../taskWizard/taskWizard.service";

class TasksComponent {
    private name: string;
    private click: Function;
    private message:string;
    private timeHandler:any;

    constructor(private $mdDialog: any, private $interval:any,private TaskWizardService:ITaskWizardService) { this.name = "Rosen Blagoev"; }

    public confirmTask(){
        console.log("Then fire confirm Task");
    }

    public refresh=()=>{
      this.message = 'refreshed ' + Math.random();  
    }

    public startRefresh = () => {
        this.refresh();             
        this.timeHandler = this.$interval(this.refresh, 1E3);
    } 

    public stopRefresh = () => { 
        this.$interval.cancel(this.timeHandler);  
        this.timeHandler = null;             
        this.message = 'Refresh stopped';        
    }

    public $onInit(){
        this.startRefresh();
    }

   

    public openDialog(){
        this.stopRefresh();
        this.TaskWizardService.showWizard(this.startRefresh);
    }

}


export const tasksComponent: IComponentOptions = {
    controller: TasksComponent,
    template: `
    <div>
        <h1>Hello {{vm.name}}</h1>
        {{vm.message}}
        <a href src="" ng-click="vm.openDialog()">Open Dialog</a>
    </div>
    `,
    controllerAs:"vm"
   
};

   