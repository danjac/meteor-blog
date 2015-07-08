
Meteor.methods({

    unauthenticated: function() {
        throw new Meteor.Error(401, "You have to log in first");
    },

    submitPost: function(post) {

        if (!this.userId) {
            this.unauthenticated();
        }

        post._id = Posts.insert(_.extend(post, {
            author: 'Author',
            userId: this.userId
        }));
        return post;
    },

    updatePost: function(params, postId) {

        if (!this.userId) {
            this.unauthenticated();
        }

        Posts.update({_id: postId, userId: this.userId},  params);

    },

    deletePost: function(id) {

        if (!this.userId) {
            this.unauthenticated();
        }

        Posts.remove({_id: id, userId: this.userId});

    }
});
