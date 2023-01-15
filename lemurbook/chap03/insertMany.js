let db = db.getSiblingDB("video");

db.movies.insertMany([
    {title: "Ghostbusters"},
    {title: "E.T."},
    {title: "Blade Runner"},
]);
