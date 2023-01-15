let db = db.getSiblingDB("video");

db.users.insertOne({
    username: 'Jack',
    emails: [
        'jack@example.com',
        'jack@gmail.com',
        'jack@yahoo.com'
    ]
});

db.users.updateOne({username: 'Jack'}, {$addToSet: {'emails': 'jacky@hotmail.com'}});
db.users.updateOne({username: 'Jack'}, {$addToSet: {'emails': {$each: ['jacky@hotmail.com', 'jake@abc.com']}}});
db.users.updateOne({username: 'Jack'}, {$addToSet: {'emails': 'jacky@abc.com'}});
