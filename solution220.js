//Warn the sheep

let newQueue = queue.reverse()
console.log('this is reversed queue' , newQueue)

let wolf = newQueue.indexOf('wolf')
console.log('this is wolf index', wolf)  

if(wolf === 0) {
  return "Pls go away and stop eating my sheep"
}else{
  return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
}   