# Connect to local mongodb using mongosh

    mongosh --port 3001

# Create a document in mongosh

    use video
    movie = { title: "Star Wars: Episode IV - A New Hope", director: "George Lucas", year: 1977 }
    db.movies.insertOne(movie)
    db.movies.find().pretty()

# Read a document in mongosh

    use video
    db.movies.findOne()

# Update a document in mongosh

    use video
    db.movies.updateOne({title: "Star Wars: Episode IV - A New Hope"}, {$set: {reviews: []}})
    db.movies.find().pretty()

# Delete a document in mongosh

    use video
    db.movies.deleteOne({title: "Star Wars: Episode IV - A New Hope"})
    db.movies.find().pretty()

