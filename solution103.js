/* “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?” 
Where x <= 1000 and y <=1000
Assuming there are no other types of animals, work out how many of each animal are there. However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.
You will only be given integers types - however negative values (edge cases) will be given. */

function animals(heads, legs) {
    const cows = legs / 2 - heads;
    const chickens = heads - cows;
    
    if (legs & 1 || chickens > heads || cows > heads)
      return "No solutions";
    else
      return [chickens, cows];
  }