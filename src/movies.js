// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array){
  const directors = array.map( item => item.director);  //directors will return an array containing only the names of the directors;
  return directors.filter((element, index) => directors.indexOf(element) === index) //return the filter of the new array "directors", filtering by index of current element and name's index;
} 

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let steven =  array.filter(element => element.director === 'Steven Spielberg' && element.genre.includes('Drama'));
  return steven.length; 
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  let totalScores = 0;
  const allScores = array.map(value => value.score)
  for (let i = 0; i < array.length; i++) {
    totalScores += array[i].score;    
  }
  return Number((totalScores / allScores.length).toFixed(2))
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let drama = array.filter(element => element.genre.includes('Drama'));
  let dramaScores = drama.reduce((acc, item) => acc + item.score, 0)
  return Number((dramaScores / drama.length).toFixed(2))
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let ordered = JSON.parse(JSON.stringify(array))
   ordered = ordered.sort((a, b) => {
     if (a.year > b.year) {
       return 1;
     } else if (a.year < b.year) {
       return -1;
     } else if (a.year === b.year) {
       if (a.title > b.title) {
         return 1;
       } else {
         return -1;
       }
     }
   });
  return ordered;
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let ordered = JSON.parse(JSON.stringify(array))
  ordered = ordered.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1
    }
  })
  return ordered;
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(array) {
//   let newArray = JSON.parse(JSON.stringify(array));
//   let hours = newArray.duration.split(h);
//   let numberOfHours = Number(hours * 60)
//   return numberOfHours
// }

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
