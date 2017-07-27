describe('Bubble Sort', function(){
  it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function(){
      expect( bubbleSort([3]) ).toEqual( [3] );
      expect( bubbleSort([5]) ).toEqual( [5] );
      expect( bubbleSort([12]) ).toEqual( [12] );
  });

  it('handles an array with multiple elements', function(){
      expect( bubbleSort([5,3,8,12,6]) ).toEqual( [3,5,6,8,12] );
      expect( bubbleSort([12,5,3,4,8,1,15,33,98,54]) ).toEqual( [1, 3, 4, 5, 8, 12, 15, 33, 54, 98] );
  });

  it('handles string and number arrays',function(){
      expect( bubbleSort(['banana', 'apple', 'peach', 'pear', 'strawberry', 'kiwi']) ).toEqual( ['apple', 'banana', 'kiwi', 'peach', 'pear', 'strawberry']);
      expect( bubbleSort([13,3,8,12,6]) ).toEqual( [3,6,8,12,13] );
  });

 // it('does not call array.prototype.sort() function', function(){

 // })

});