({
	packItem : function(component, event, helper) {          
        var button = event.getSource();
        button.set('v.disabled',true);	
        component.set("v.item.Packed__c", true);
	}
})