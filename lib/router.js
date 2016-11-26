Router.configure({
    layoutTemplate: 'form_layout'
});

Router.map(function() {
    // login-home
    this.route('login', {
        path: '/',
        template: 'login'
    });
    // register
    this.route('register');
    // dashboard
    this.route('dashboard', {
        layoutTemplate: 'dashboard_layout',
        path: '/dashboard',
        template: 'dashboard',
        // show login if went to dashboard when logged out
        onBeforeAction: function(){
            if(Meteor.user() == null){
                Router.go('/');
            }
            this.next();
        }
    });
});
