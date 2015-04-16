//TODO Créer
newTrajet = new Mongo.Collection('trajet');

// Inside the if (Meteor.isClient) block, right after Template.body.helpers:
Template.newTarget.events({
  "click #validate": function (event, tmpl) {
    // This function is called when the new task form is submitted

    // var lieuDepart  = event.target.document.getEleme.value;
    // var lieuArrivee = event.target.lieuArrivee.value;
    // var date     = event.target.date.value;
    // var horaire     = event.target.horaire.value;

    var infoTrajet = {
     lieuDepart: tmpl.find("#lieuDepart").value,
     lieuArrivee: tmpl.find("#lieuArrivee").value,
     date: tmpl.find("#date").value,
     horaire: tmpl.find("#horaire").value
    };


    newTrajet.insert({
      lieuDepart: infoTrajet.lieuDepart,
      lieuArrivee: infoTrajet.lieuArrivee,
      date: infoTrajet.date,
      horaire: infoTrajet.horaire,

      createdAt: new Date() // current time
    });

    // Clear form
    // event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});