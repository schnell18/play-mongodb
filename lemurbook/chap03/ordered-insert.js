let db = db.getSiblingDB("video");

// ordered insert stop on first error
db.movies.insertMany([
    {_id: 0, title: "Top Gun"},
    {_id: 1, title: "Back to the Future"},
    {_id: 1, title: "Gremlins"},
    {_id: 2, title: "Aliens"},
]);
