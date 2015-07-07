Meteor.methods({
    submitPost: function(post) {

        var user = Meteor.user();
        if (!user) {
            throw new Meteor.Error(401, "You have to log in first");
        }

        var additionalParams = {
            author: 'Author',
            createdAt: new Date(),
            userId: user._id
        };

        _.extend(post, additionalParams);
        post._id = Posts.insert(post);
        return post;
    },

    deletePost: function(id) {

        var user = Meteor.user();

        if (!user) {
            throw new Meteor.Error(401, "You have to log in first");
        }

        var post = Posts.findOne(id);
        if (!post) {
            throw new Meteor.Error(404, "No post found");
        }

        if (post.userId !== user._id) {
            throw new Meteor.Error(403, "You can't delete this post!");
        }

        Posts.remove(post._id);

    }
});
