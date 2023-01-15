let db = db.getSiblingDB("video");

db.movies.insertOne({title: 'Goodman Joe', genre: 'horror'});

db.movies.updateOne({genre: 'horror'},
    {$push: {top10: {
        $each: [
            {name: 'Nightmare on Elm Street', rating: 6.6},
            {name: 'Saw I', rating: 4.6},
            {name: 'Saw II', rating: 5.6},
            {name: 'Saw III', rating: 7.6},
            {name: 'Saw IV', rating: 7.1},
            {name: 'Saw V', rating: 8.6},
            {name: 'Saw VI', rating: 5.8},
            {name: 'First Blood I', rating: 7.8},
            {name: 'First Blood II', rating: 8.1},
            {name: 'First Blood II', rating: 8.3},
            {name: 'First Blood IV', rating: 8.7}
        ],
        $slice: -10,
        $sort: {rating: -1}
    }}}
);
