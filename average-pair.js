"use strict";

/** function that takes an array of number and a target average
 * determines if a pair exists that has an average value equal to
 * target average
 * returns true or false
 */

function averagePair(nums, targetAvg) {

  const target = (targetAvg * 2);

  const left = 0;
  const right = nums.length -1;

  while(left < right){

    const sum = nums[left] + nums[right];

    if(sum === target){
      return true;
    } else if (sum > target){
      right --;
    } else {
      left ++;
    }
  }

  return false;
}

