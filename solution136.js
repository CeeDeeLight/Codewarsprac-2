/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Examples: filter_list([1,2,'a','b']) == [1,2]   filter_list([1,'a','b',0,15]) == [1,0,15]
  */
function filter_list(l){
    let result = []
    for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == 'number'){
        result.push(l[i])
      }
    }
    return result
}