let db = db.getSiblingDB("video");

db.movies.deleteOne({_id: 4});
