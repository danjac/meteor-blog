
Meteor.methods({
    submitPost: function(post) {

        if (!this.userId) {
            err401();
        }

        post._id = Posts.insert(_.extend(post, {
            author: 'Author',
            createdAt: new Date(),
            userId: this.userId
        }));
        return post;
    },

    updatePost: function(params, postId) {

        if (!this.userId) {
            err401();
        }

        Posts.update({_id: postId, userId: this.userId},  params);

    },

    deletePost: function(id) {

        if (!this.userId) {
            err401();
        }

        Posts.remove({_id: id, userId: this.userId});

    }
});
