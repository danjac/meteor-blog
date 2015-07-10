EditPostController = BaseSinglePostController.extend({
    template: 'editPost',

    data: function() {

        var post = Posts.findOne(this.params._id);

        if(!post) {
            this.render("notFound");
            return;
        }

        if (post.userId !== Meteor.userId()){
            this.render("accessDenied");
            return;
        }

        return post;
    }
});
