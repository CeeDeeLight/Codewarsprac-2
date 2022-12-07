/* write a function that returns the showtimes of a specific movie, given its length. In order to make your job easier, you will work with 24-hour format throughout this kata.
Your function receives three parameters, all of them being integers: open - Hour at which the cinema opens. close - Hour at which the cinema closes. length - Length of the movie, in minutes.
It must return an array of times, with each time being in the format (hour, minute). For example, (19, 30) means 19:30, and (2, 0) means 02:00. The last session in the array cannot end after the cinema closes. 
Also, the times in the array must be sorted from earliest to latest. There's also a 15-minute window between a session's end 
and the beginning of the following one, in order to give enough time for users to take a seat. */

function movie_times(open, close, length) {
    let arr = [];
    if (close < open) close += 24;
    for (let time = open * 60; time + length <= close * 60; time += (length + 15)) {
       arr.push([Math.floor( time /60) % 24, time % 60]);
    }
    return arr;
  }