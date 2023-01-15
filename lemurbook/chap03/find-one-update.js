let db = db.getSiblingDB("video");

db.processes.insertMany([
    { name: 'Proc1', status: 'READY', priority: 10 },
    { name: 'Proc2', status: 'READY', priority: 15 },
    { name: 'Proc3', status: 'DONE', priority: 20 },
]);

let task = db.processes.findOneAndUpdate(
    { status: 'READY'},
    { $set: {status: 'RUNNING'}},
    { $sort: {priority: -1}, returnNewDocument: true}
)
