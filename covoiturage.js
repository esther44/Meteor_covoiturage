utilisateurs = new Mongo.Collection("utilisateurs"); /* nom - prenom - type(passager ou conducteur) */
trajets = new Mongo.Collection("trajets");/* date - lieu départ - lieu arrivée - nombre de places - modèle voiture */

utilisateurs.insert({nom:"desbois", prenom:"esther", type:"conducteur"});