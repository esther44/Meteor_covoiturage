// utilisateurs = new Mongo.Collection("utilisateurs"); /* nom - prenom - type(passager ou conducteur) */
// trajets = new Mongo.Collection("trajets");/* date - lieu départ - lieu arrivée - nombre de places - modèle voiture */

Template.home.helpers({email:function(){
	return Meteor.users.findOne({_id:Meteor.userId()}).emails[0].address ;
}})