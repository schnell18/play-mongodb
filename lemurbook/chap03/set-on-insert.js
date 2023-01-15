let db = db.getSiblingDB("video");

db.users.updateOne({name: 'Jane'}, {$setOnInsert: {createAt: new Date()}}, {upsert: true});
