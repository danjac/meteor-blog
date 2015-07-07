SinglePostController = BaseController.extend({

    template: "postPage",

    waitOn: function() {
        return Meteor.subscribe('singlePost', this.params._id);
    },

    data: function() {

        var post = Posts.findOne(this.params._id),
            userId = Meteor.userId(),
            canDelete = post && userId && post.userId === userId;

        return {
            post: post,
            canDelete: canDelete
        }

    }
});
