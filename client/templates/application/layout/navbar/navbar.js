Template.navbar.helpers({email:function(){
	return Meteor.users.findOne({_id:Meteor.userId()}).emails[0].address ;
}})