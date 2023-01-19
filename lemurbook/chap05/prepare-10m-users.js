// create 1 million sample user data
for (let i=0; i<1_000_000; i++) {
    db.users.insertOne({
        userId: i,
        userName: "user"+i,
        age: Math.floor(Math.random()*120),
        created: new Date()
    });
}

// view query execution plan
db.users.find({userName: 'user101'}).explain('executionStats')

// create index
db.users.createIndex({userName: 1})
