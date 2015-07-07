BaseController = RouteController.extend({
    layoutTemplate: "mainLayout"
});

BaseSinglePostController = BaseController.extend({

    waitOn: function() {
        return Meteor.subscribe('singlePost', this.params._id);
    },

    data: function() {

        var post = Posts.findOne(this.params._id);

        if(!post) {
            this.render("notFound");
            return;
        }

        return post;
    }
});
