let db = db.getSiblingDB("video");

db.games.insertOne({ game: "pinball", user: "Joe" });

db.games.updateOne({ game: "pinball", user: "Joe" }, {$inc :{score: 50}});
db.games.updateOne({ game: "pinball", user: "Joe" }, {$inc :{score: -50}});

// $inc does not work w/ non-numeric field
db.games.updateOne({ game: "pinball", user: "Joe" }, {$inc :{user: 50}});

// $inc does not work w/ non-numeric increament
db.games.updateOne({ game: "pinball", user: "Joe" }, {$inc :{score: '50'}});




