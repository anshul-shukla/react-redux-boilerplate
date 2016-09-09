// import React from 'react';
// import ReactDOM from 'react-dom';
//
// ReactDOM.render(
//     <div>Hello World!</div>,
//     document.querySelector('#content')
// );


(function(){

    var words = ['name','yes', 'no', 'television', 'world','ass','request','graph', 'time','times', 'age','ago', 'able', 'day','days'];
    var insertedWords = [];

    create15X15Grid();

    function create15X15Grid(){
      var grid = '';
      for(var y = 0; y< 15; y++){
        for(var x = 0; x<15; x++){
            grid += divFactory(x,y);
        }
      }
      var wrapper = document.getElementById('gridWrapper');
      wrapper.innerHTML = grid;
      return grid;
    }

    function divFactory(x,y){
      return '<div contenteditable="true" onkeypress="return (this.innerText.length < 1)" class= "grid-item" data-x='+ x +' data-y='+ y +'></div>';
    }

    function getRandomGrid(){
      return [Math.floor(Math.random() * (14 - 0 + 1)) + 0,Math.floor(Math.random() * (14 - 0 + 1)) + 0]
    }

    function getRandomWord(){
      return words[Math.floor(Math.random()*words.length)];
    }

    function getRandomDirection(directions){
      return words[Math.floor(Math.random()*words.length)];
    }

    function fillInitials(){
      var word = getValidWord();
      var grid = getValidGrid(word);

    }

    function getValidWord(){
      word = false;
      while(word){
        word = isInsertedWord(getRandomWord()); //tends to infinity
      }
      return word;
    }

    function isInsertedWord(word){
      if (insertedWords.indexOf(word) !== -1) {
        return false;
      }
      return word;
    }

    function getValidGrid(word){
      grid = false;
      while(grid){
        grid = isValidGrid(getRandomGrid(word)); //tends to infinity
      }
      return grid;
    }

    function isValidGrid(word){
      var directions = ['left','right','top','bottom'];
      // TO-DO , select random direction
      var wordLength = word.length;
      var grid = getRandomGrid();
      switch(direction){
        case 'right' :
          if(grid[1] + wordLength < 15){

          }
          return false;
        case 'left' :
        case 'top' :
        case 'bottom' :
        default :
      }

    }

    function isOverflow(direction,grid,wordLength){

    }

})();
