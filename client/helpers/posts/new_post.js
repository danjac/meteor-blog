AutoForm.hooks({
    submitPostForm: {
        onSuccess: function(op, post) {
            FlashMessages.sendSuccess("Thanks for your post!");
            Router.go('singlePost', post);
        }
    }
});
