/* return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.
The result should also be ordered from highest to lowest.  */
function twoHighest(arr) {
    const uniqueChar = [...new Set(arr)];
    const sorted = uniqueChar.sort((n1, n2) => (n1 - n2) * -1 )
    if (sorted.length <=2) return sorted;
      return sorted.slice(0, 2);
  }