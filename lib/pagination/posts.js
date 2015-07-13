
function paginationOptions(options) {
    var baseOptions = {
        perPage: 5,
        sort: {
            createdAt: -1
        },
        templateName: "postsList",
        itemTemplate: "postItem",
        availableSettings: {
            filters: true
        }
    };

    options = options ? options : {};
    return _.defaults(baseOptions, options);
}

Pages = new Meteor.Pagination(Posts, paginationOptions());

