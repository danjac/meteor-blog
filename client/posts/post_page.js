Template.postPage.events({
    'click #deletePost': function(event, template) {
        event.preventDefault();
        if (window.confirm("Are you sure you want to delete this post?")) {
            Meteor.call('deletePost', template.data._id);
            FlashMessages.sendWarning("Your post '" + template.data.title + "' has been deleted");
            Router.go("root");
        }
    }
});


Template.postPage.helpers({
    isOwner: function() {
        var userId = Meteor.userId();
        return userId && userId === this.userId;
    }
});
