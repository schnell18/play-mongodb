let db = db.getSiblingDB("video");

db.posts.updateOne({
    title: 'A Blog Post'
}, {$push: {
    upvotes: {
        $each: [3, 3, 4]
    }
}});

