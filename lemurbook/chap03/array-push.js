let db = db.getSiblingDB("video");

db.posts.updateOne({
    title: 'A Blog Post'
}, {$push: {
    comments: {
        name: 'jack',
        email: 'jack@mars.com',
        content: 'Nice Post!!!'
    }
}});

db.posts.updateOne({
    title: 'A Blog Post'
}, {$push: {
    comments: {
        name: 'justin',
        email: 'justin@juno.com',
        content: 'Simply good'
    }
}});
