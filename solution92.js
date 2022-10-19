//Clock shows h for hours, m for min, s for seconds after midnight. 
//Write a function which returns the times since midnight in milliseconds.
//ex: h=0, m=1, s=1 result = 61000
//input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

function past(h, m, s){
    return ((h*3600) + (m*60) +s) * 1000;
  }