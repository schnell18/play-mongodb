let db = db.getSiblingDB("video");

db.posts.insertOne({
    title: 'Blog Post1',
    content: 'A funny post',
    comments: [{
        author: 'Kafka',
        content: 'Bravo!!!',
        email: 'kafka@literature.com',
        votes: 10
    },{
        author: 'John',
        content: 'Piece of crap!!!',
        email: 'john@abc.com',
        votes: -10 
    },{
        author: 'Jimmy',
        content: 'Pile of sh*t!!!',
        email: 'john@abc.com',
        votes: -15 
    }]
});

db.posts.updateOne({title: 'Blog Post1'}, {$set: {"comments.$.author": "Jim"}});
db.posts.updateOne({ 'comments.author': 'Jimmy'}, {$set: {"comments.$.author": "Jim"}});
