import { LightningElement, api, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SuccessToastMessage extends LightningElement {
    @api type;
    @api message;
    @api autoCloseTime;
    showToastBar = false;

    currentPageReference = null; 
 
    /* Params from Url */
    urlResult = null;

 
    @wire(CurrentPageReference)
    getURLParameters(currentPageReference) {
       if (currentPageReference) {
          this.urlResult = currentPageReference.state.result || null;
          console.log('result', this.urlResult)
       }
    }

    connectedCallback(){
        this.showToast();
    }


    showToast() {
        console.log('outside')
        if(this.urlResult==='success'){
            console.log('inside')
            this.showToastBar = true;
            setTimeout(() => {
                this.closeModel();
            }, this.autoCloseTime);
        }
    }
 
    closeModel() {
        this.showToastBar = false;
    }
 
    get getIconName() {
        return 'utility:' + this.type;
    }
 
    get innerClass() {
        return 'slds-icon_container slds-icon-utility-' + this.type + ' slds-icon-utility-success slds-m-right_small slds-no-flex slds-align-top ';
    }
 
    get outerClass() {
        return 'slds-notify slds-notify_toast slds-theme_' + this.type;
    }

   /*old code does not work for LWR
   
   @api title;
    @api message

    button(){
        this.showNotification();
    }

    showNotification() {
        console.log('button clicked')
        const evt = new ShowToastEvent({
            title: this.title,
            message: this.message,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
    */
}