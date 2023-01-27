/* The Unknown but Known Variables. https://www.codewars.com/kata/5716955a794d3013d00013f9/javascript
There will be a string input in this format: 'a+b' 2 lower case letters (a-z) seperated by a '+'
Return the sum of the two variables.
There is one correct answer for a pair of variables.
Once you crack the code for one or two of the pairs, you will have the answer for the rest.
X = a+b.
You don't know what X is, and you don't know what b is or a, but it is a puzzle and you will find out.
As part of this puzzle, there is three hints or clues on solving this. Don't overthink it. It is a simple solution 
Given the input as a string - Return the sum of the two variables as int. */

function theVar(theVariables) {
  return theVariables.charCodeAt(0) + theVariables.charCodeAt(2) - 2 * 96;
}