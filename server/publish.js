Meteor.publish('allPosts', function() {
    return Posts.find();
});

Meteor.publish('postsByUser', function(userId) {
    return Posts.find({ userId: userId });
});

Meteor.publish('singlePost', function(id) {
    return Posts.find(id);
});
