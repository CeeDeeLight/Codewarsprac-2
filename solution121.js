const wallpaper = (l, w, h) =>
["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
 "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", 
 "seventeen", "eighteen", "nineteen", "twenty"]
[l && h && w ? Math.ceil(2 * h * (l + w) / 5.2 * 1.15) : 0]