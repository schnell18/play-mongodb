let db = db.getSiblingDB("video");

db.users.updateOne({name: 'Joe'}, {$set: {age: 30, sex: "male", location: "Wisconsin"}});
db.users.updateOne({name: 'Joe'}, {$set: {book: 'War and Peace'}});
db.users.updateOne({name: 'Joe'}, {$set: {book: 'Green Eggs and Ham'}});
db.users.updateOne({name: 'Joe'}, {$set: {book: ['Cat Cradle', 'Foundation Trilogy']}});
db.users.updateOne({name: 'Joe'}, {$unset: {book: 1}});
