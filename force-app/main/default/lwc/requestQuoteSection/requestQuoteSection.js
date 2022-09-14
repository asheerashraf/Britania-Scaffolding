import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RequestQuoteSection extends NavigationMixin (LightningElement) {
    @api quoteTitle;
    @api buttonLabel;
    @api marginTop; 
    @api marginBottom;
    flag = false;

    //Determines if section is used for quote request or catalog download
    @api catalogTrue = false

    renderedCallback() { 
        if(this.flag === false){
            this.CSSVariables();
            this.flag = true;
        }
    }

    requestButton(){
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Request_Quote__c'
            },
        });
    }

    CSSVariables() {
        var css = this.template.host.style;
        css.setProperty('--marginTop', this.marginTop);
        css.setProperty('--marginBottom', this.marginBottom);
    }

    //opens PDF file (product catalog) when user clicks button
    handleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://turo-prestige.cs219.force.com/cms/delivery/media/MCVDDQ23KLDZBHXGROVCDWIQYGNQ'
            }
        }, false );
    }

    //Determines which button to display (request quote or display product catalog)
    buttonHandler(){
        console.log(this.catalogTrue)
        if(this.catalogTrue){
            this.handleClick();
        }else{
            this.requestButton();
        }
    }

}