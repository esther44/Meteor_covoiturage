// if (Meteor.isClient) {
//   Meteor.startup(function () {
//     layout = new Iron.Layout({/* template: 'MyLayout', data: dataFunction */ });

//     // insert the layout with an optinoal container element
//     layout.insert({el: '#optional-container'});

//     // set the template for the layout
//     layout.template('DialogBox');

//     // set the data context for the layout
//     layout.data({title: 'Some Layout Title'});

//     // render MainTemplate into the main region of the layout
//     layout.render('MainTemplate');

//     // render the MyHeader template to the 'header' region of the layout.
//     layout.render('MyHeader', {to: 'header'});

//     // render the MyFooter template to the 'footer' region of the layout. Also set a custom data context for the region.
//     layout.render('MyFooter', {to: 'footer', data: {title: 'Custom footer data context'}});
//   });
// }

// if (Meteor.isClient) {
//   Meteor.startup(function () {
//     layout = new Iron.Layout({template: 'DialogBox'});

//     // insert the layout with an optinoal container element
//     layout.insert({el: '#optional-container'});

//     // start recording which regions have been rendered into
//     layout.beginRendering();

//     // render MainTemplate into the main region of the layout
//     layout.render('MainTemplate');

//     // render the MyHeader template to the 'header' region of the layout.
//     layout.render('MyHeader', {to: 'header'});

//     // render the MyFooter template to the 'footer' region of the layout. Also set a custom data context for the region.
//     layout.render('MyFooter', {to: 'footer', data: {title: 'Custom footer data context'}});

//     // force a Deps.flush and get an object of
//     // regions that have been rendered. In this case:
//     // => {"main": true, "header": true, "footer": true}
//     var renderedRegions = layout.endRendering();
//   });
// }