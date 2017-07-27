function bubbleSort(array) {

  /* your code here */
  //how can we make this more efficient so it doesnt have uneccesary iterations
  var swapped, temp;
  do{
      swapped = false;

      for(let i=0; i<array.length-1; i++){
          //if leftElement > rightElement, swap
          //set swapped to true;
          if(array[i] > array[i+1]){
              temp = array[i];
              array[i] = array[i+1];
              array[i+1] = temp;
              swapped = true;
          }
      }

 }while(swapped)
 return array;
    
}