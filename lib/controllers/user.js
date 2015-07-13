UserController = BaseController.extend({
    template: "postsList",

    findOptions: function() {
        return { sort: { createdAt: -1 }};
    },

    waitOn: function() {
        return Meteor.subscribe('postsByUser', this.params._id, this.findOptions());
    },

    data: function() {
        Pages.set({
            filters: {
                userId: this.params._id
            }
        });
    }

});
