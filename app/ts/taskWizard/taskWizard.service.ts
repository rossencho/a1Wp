
export interface ITaskWizardService  {
    showWizard(cb:Function):void;
}

export class TaskWizardService{

    constructor(private $mdDialog:any){}

    public showWizard(cb:Function){
        this.$mdDialog.show({
            controllerAs: 'model',
            clickOutsideToClose: true,
            bindToController: true,
            controller: function(refresh:Function, $mdDialog:any){
                this.hide = function(){
                    refresh();
                    $mdDialog.hide();
                }
            },
            autoWrap: false,
            template: '<md-dialog class="stickyDialog"  aria-label="wizard"><task-wizard on-close="model.hide()"></task-wizard> </md-dialog>',
            locals: {
                refresh: cb
            }
        });
    }
}