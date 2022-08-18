import { LightningElement, api, wire } from 'lwc';
import getMenuItems from '@salesforce/apex/navMenuItemsController.getNavItems';

export default class NavMenuItems extends LightningElement {
    @api parentId;
    menuItems;

	@wire (getMenuItems,{parentId: '$parentId'})
	wiredItems({data, error}){
		if(data) {
			this.menuItems =data;
			this.error = undefined;
            this.updateURL(this.menuItems)
		}else {
			this.menuItems =undefined;
			this.error = error;
		}

        console.log(this.menuItems)
	}

    console(){
        console.log(this.menuItems)
    }

    updateURL(data){
        this.menuItems = data.map ((element) => {
            return {...element,
                url : '/s' + element.Target }
        })
    }
}