let db = db.getSiblingDB("video");

db.movies.deleteMany({year: 1977});
