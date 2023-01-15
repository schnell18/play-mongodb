let db = db.getSiblingDB('video')
db.movies.updateOne({title: "Star Wars: Episode IV - A New Hope"}, {$set: {reviews: []}})

