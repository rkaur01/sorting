function split(wholeArray) {
  //if array length  is odd, smaller half is left
  var firstHalf
  var secondHalf

  if (wholeArray.length % 2 === 0) {
    firstHalf = wholeArray.slice(0, wholeArray.length/2)
    secondHalf = wholeArray.slice(wholeArray.length/2)
  }
  else {
    firstHalf = wholeArray.slice(0, Math.min(wholeArray.length/2));
    secondHalf = wholeArray.slice(Math.min(wholeArray.length/2));
  }

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  var mergedArr = [];
  //while neither arr is empty
  while(arr1.length || arr2.length){
    //if first element of arr1 is less than first element of arr2
    //shift out first element and push into mergedArr
    if(arr1[0] < arr2[0]){
      mergedArr.push(arr1.shift());
    }
    //if first element of arr2 is less than first element of arr1
    //shift out first element and push into mergedArr
    else{
      mergedArr.push(arr2.shift());
    }
  }
  return mergedArr;
}
