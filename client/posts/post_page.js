Template.postPage.events({
    'click #deletePost': function(event, template) {
        event.preventDefault();
        Meteor.call('deletePost', template.data._id);
        Router.go("root");
    }
});
