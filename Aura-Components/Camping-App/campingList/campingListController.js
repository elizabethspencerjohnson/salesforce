({
    clickCreateItem: function(component, event, helper) {
        var validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new item
            var newItem = component.get("v.newItem");
            console.log("Create Item: " + JSON.stringify(newItem));            
            var theItems = component.get("v.items");
            console.log("Items before 'create': " + JSON.stringify(theItems));
            theItems.push(newItem);
            component.set("v.items", theItems);
            console.log("Items after 'create': " + JSON.stringify(theItems));
            component.set("v.newItem",{'sobjectType':'Camping_Item__c',
                'Name': '',
                'Quantity__c': 0,
                'Price__c': 0,
                'Packed__c': false});
        }
    }
})