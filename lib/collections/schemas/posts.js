var postFields = {
    title: {
        type: String,
        label: 'Title',
        min: 10
    },
    body: {
        type: String,
        label: 'Body',
        autoform: {
            type: 'textarea',
            rows: 5
        }
    },
    _id: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
    userId: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
    author: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        },
        autoform: {
            omit: true
        }
    }
};

PostSchema = new SimpleSchema(postFields);
