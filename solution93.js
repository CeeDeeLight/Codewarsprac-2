//There are a certain number of monkeys(n) you son is too young ans has to start counting from 1.
//Given the number(n), populate an ARRAY with all numbers up to and including that number, but exclude zero.
//ex: input-->output 10-->[1,2,3,4,5,6,7,8,9,10]
//1 --> [1]
monkeyCount = n => Array.from({length: n}, (_,i) => i + 1)