public with sharing class navMenuItemsController {

    @AuraEnabled(cacheable=true)
    public static list<NavigationMenuItem> getNavItems(String parentId){
        
        return [SELECT Id, Label, Target 
                FROM NavigationMenuItem 
                WHERE ParentId= :parentId];
    }

}
