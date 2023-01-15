let db = db.getSiblingDB("video");

db.posts.insertOne({
    title: 'A Blog Post',
    content: '...',
    author: {
        name: 'Kafka',
        email: 'kafka@literature.com'
    }
});

db.posts.updateOne({'author.name': 'Kafka'}, {$set: {'author.name': 'Kafka Jr'}});
