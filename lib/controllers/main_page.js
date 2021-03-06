MainPageController = BaseController.extend({
    template: "postsList",

    findOptions: function() {
        return { sort: { createdAt: -1 }};
    },

    waitOn: function() {
        return Meteor.subscribe('allPosts', this.findOptions());
    },

    data: function() {
        Pages.set({
            filters: {}
        });

    }
});
