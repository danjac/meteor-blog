
function err401() {
    throw new Meteor.Error(401, "You have to log in first");
}

