
function bubbleSort(arr) {
  // Iterate through the array
  let sorted = false;
  while(!sorted){      
    sorted = true;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        [arr[i],arr[i+1]] = [arr[i+1], arr[i]];
        console.log(arr.join(","));
        sorted = false;
      }
    }
    }
    // If the current value is greater than its neighbor to the right
    // Swap those values
    
    // Do not move this console.log
            
    return 

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;