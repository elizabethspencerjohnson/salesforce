({
	createItem: function(component, newItem) {
        var createEvent = component.getEvent("addItem");
        createEvent.setParams({ "item": newItem });
        createEvent.fire();
        // resets the newItem value provider with a blank sObjectType of type Camping_Item__c
        component.set("v.newItem",{'sobjectType':'Camping_Item__c',
                                               'Name': '',
                                               'Quantity__c': 0,
                                               'Price__c': 0,
                                               'Packed__c': false});
    },
})