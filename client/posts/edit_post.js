AutoForm.hooks({
    editPostForm: {
        onSuccess: function() {
            FlashMessages.sendSuccess("Your post has been updated");
            Router.go('singlePost', { _id: this.docId});
        }
    }
});
