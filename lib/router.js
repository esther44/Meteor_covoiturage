Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    'header': {to: 'header'},
    'footer': {to: 'footer'},
    'navbar': {to: 'navbar'},

}});

Router.route('/newTarget', {name: 'newTarget'});
Router.route('/login', {name: 'login'});
Router.route('/home', {name: 'home'});