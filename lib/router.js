Router.configure({
    loadingTemplate: 'spinner',
    notFoundTemplate: 'notFound'
});

Router.route("/", {
    name: "root",
    controller: "MainPageController"
});

Router.route("/new", {
    name: "newPost",
    controller: "NewPostController"
});

Router.route("/:_id", {
    name: "singlePost",
    controller: "SinglePostController"
});

Router.route("/:id/delete", {
    name: "deletePost",
    action: function() {
        Meteor.call('deletePost', this.params.id);
        this.redirect('root');
    }
});

Router.onBeforeAction(function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}, {only: ['newPost', 'deletePost']});



