AutoForm.hooks({
    submitPostForm: {
        onSuccess: function(op, post) {
            Router.go('singlePost', post);
        }
    }
});
