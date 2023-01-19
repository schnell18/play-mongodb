// create 1 million sample student score data
for (let i=0; i<1_000_000; i++) {
    db.scores.insertOne({
        student_id: i,
        class_id: 1+Math.floor(Math.random()*50),
        final_score: 50+Math.floor(Math.random()*50),
        created: new Date()
    });
}

db.scores.find({student_id: {$gt:500000}, class_id:48}).sort({student_id:1}).explain('executionStats')

// unoptimized index
db.scores.createIndex({class_id: 1})
db.scores.createIndex({student_id: 1, class_id: 1})

// use hint to favor particular index
db.scores.find({student_id: {$gt:500000}, class_id:48}).sort({student_id:1}).hint({class_id: 1}).explain('executionStats')

// add findal_score to index to avoid in-memory sort
db.scores.createIndex({class_id: 1, final_score: 1, student_id: 1})

db.scores.find({student_id: {$gt:500000}, class_id:48}).sort({final_score:-1}).explain('executionStats')

// use cover index
db.scores.find({student_id: {$gt:500000}, class_id:48}, {_id: 0, student_id: 1, class_id: 1, final_score: 1}).sort({final_score:-1}).explain('executionStats')
