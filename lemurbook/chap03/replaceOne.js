let db = db.getSiblingDB("video");

// db.users.insertOne({
//     _id: ObjectId("4b2b9f67a1f631733d917a7a"),
//     name: "Joe",
//     friends: 22,
//     enemies: 2
// });

let joe = db.users.findOne({name: 'Joe'});
joe.relationships = { friends: joe.friends, enemies: joe.enemies };
joe.username = joe.name;
delete joe.friends;
delete joe.enemies;
db.users.replaceOne({name: 'Joe'}, joe);
