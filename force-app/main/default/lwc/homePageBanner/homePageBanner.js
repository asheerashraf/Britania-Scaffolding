import { LightningElement, api } from 'lwc';

export default class HomePageBanner extends LightningElement {
    @api contentKey
    @api contentId

    get imageURL() {
        return `/sfsites/c/cms/delivery/media/${this.contentKey}`
    }
}