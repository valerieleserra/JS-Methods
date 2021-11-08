//unshift adds new element to 0 index

const myMovies = [
  {
    name: 'American Snyper',
    genre: 'Action',
    actor: 'Bradley Cooper',
  },
  {
    name: 'Pirates Of the Caribbean',
    genre: 'Family',
    actor: 'Johnney Depp',
  },
  {
    name: 'Halloween',
    genre: 'Horror',
    actor: 'Jason',
  },
]

let newMovie = myMovies.unshift({
  name: '21 Jump Street',
  genre: 'Comedy',
  actor: 'Jonah Hill',
})

console.log(myMovies)
