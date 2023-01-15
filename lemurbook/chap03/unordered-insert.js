let db = db.getSiblingDB("video");

// unordered insert continues on error
db.movies.insertMany([
    {_id: 3, title: "Sixteen Candles"},
    {_id: 4, title: "The Terminator"},
    {_id: 4, title: "The Princess Bride"},
    {_id: 5, title: "Scarface"},
], { ordered: false});
