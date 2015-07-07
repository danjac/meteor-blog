Meteor.methods({
    submitPost: function(post) {

        if (!this.userId) {
            throw new Meteor.Error(401, "You have to log in first");
        }

        var extras = {
            author: 'Author',
            createdAt: new Date(),
            userId: this.userId
        };

        _.extend(post, extras);
        post._id = Posts.insert(post);
        return post;
    },

    updatePost: function(params, postId) {

        if (!this.userId) {
            throw new Meteor.Error(401, "You have to log in first");
        }

        Posts.update({_id: postId, userId: this.userId},  params);

    },

    deletePost: function(id) {

        if (!this.userId) {
            throw new Meteor.Error(401, "You have to log in first");
        }

        var post = Posts.findOne(id);
        if (!post) {
            throw new Meteor.Error(404, "No post found");
        }

        if (post.userId !== this.userId) {
            throw new Meteor.Error(403, "You can't delete this post!");
        }

        Posts.remove(post._id);

    }
});
