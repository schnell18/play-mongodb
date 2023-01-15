let db = db.getSiblingDB('video')
let movie = { title: "Star Wars: Episode IV - A New Hope", director: "George Lucas", year: 1977 }
db.movies.insertOne(movie)
