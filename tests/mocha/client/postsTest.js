if (!(typeof MochaWeb === 'undefined')) {

    MochaWeb.testOnly(function() {
        describe("show home page", function() {
            console.log("running...");
            Meteor.flush();
            Router.go("/");
            chai.assert(Router.current().url, "/")
        });
    });
}
