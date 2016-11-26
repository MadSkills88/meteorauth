Template.login.events({
    "submit .form-signin": function(event){
        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email, password, function(err){
            if(err) {
                event.target.email.value = email;
                event.target.password.value = password;

                FlashMessages.sendError(err.reason);
            } else {
                FlashMessages.sendSuccess("You are now logged in successfully.");
                Router.go('/dashboard');
            }
        });
        // prevent submit
        return false;
    },
    "click .btn-facebook": function(event) {
        event.preventDefault();
        Meteor.loginWithFacebook(function(err){
            if(err) {
                FlashMessages.sendError("Sign in failed. Please try again");
            } else {
                Router.go('/dashboard');
            }
        });
    },
    "click .btn-twitter": function(event) {
        event.preventDefault();
        Meteor.loginWithTwitter(function(err){
            if(err) {
                FlashMessages.sendError("Sign in failed. Please try again");
            } else {
                Router.go('/dashboard');
            }
        });
    },
    "click .btn-google": function(event) {
        event.preventDefault();
        Meteor.loginWithGoogle(function(err){
            if(err) {
                FlashMessages.sendError("Sign in failed. Please try again");
            } else {
                Router.go('/dashboard');
            }
        });
    },
    "click .btn-microsoft": function(event) {
        event.preventDefault();
        Meteor.loginWithMicrosoft({
            // clientId: "fae2719e-9b5a-4938-b3bd-7d55a3b4eade",
            // secret: "7A2A39031EF550EB8208C937AB111DB31CE31180",
            requestOfflineToken: true,
            requestPermissions: ['wl.signin'],
            loginUrlParameters: [],
            loginStyle: "popup",
            redirectUrl: "http://localhost:3000/"
        }, function(err) {
            if(err) {
                FlashMessages.sendError("Sign in failed. Please try again");
            } else {
                Router.go('/dashboard');
            }
        });
    },
    "click .btn-github": function(event) {
        event.preventDefault();
        Meteor.loginWith(function(err){
            if(err) {
                FlashMessages.sendError("Sign in failed. Please try again");
            } else {
                Router.go('/dashboard');
            }
        });
    }
});
