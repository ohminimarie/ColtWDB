//movieDB
//Create an array of movie objects. Each movie should have a title, 
//rating and hasWatched properties. Iterate through the array and
//print out something that looks like:

// You have watched "In Bruges" - 5 stars
// You have not seen "Frozen" - 4.5 stars
// You have seen "Mad Max Fury Road" - 5 stars
// You have not seen "Les Miserables" - 3.5 stars

// Use your own movies!!

var movies = [
  { title: "Zootopia",
    rating: 5,
    hasWatched: true},
  { title: "Star Trek Beyond",
    rating: 4,
    hasWatched: false},
  { title: "Doctor Strange",
    rating: 4,
    hasWatched: true},
  { title: "The Imitation Game",
    rating: 4.5,
    hasWatched: false},
];

movies.forEach(function(movie){
  if(movie.hasWatched === true){
    console.log("You have watched " + movie.title + " - " + movie.rating + " stars");
  } else {
    console.log("You have not watched " + movie.title + " - " + movie.rating + " stars");
  };
});