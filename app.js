document.addEventListener('DOMContentLoaded', () => { // waits for all HTML content to load
    const squares = document.querySelectorAll('.box') // selects the game squares 
    const playerDisplay = document.querySelector('#playerDisplay') // HTML tag 

    let currentPlayer = 'PlayerX' // current player is assinged PlayerX

    squares.forEach(square =>{ // loops over each square 
        square.addEventListener('click', clickOutcome) // adds an action to each square. so everytime its clicked, it will perform the clickOutcome() function
    })
    
    function clickOutcome(e){ // this function takes one parameter
        const squareArray = Array.from(squares) // creates a new array of the squares and assigns it to squareArray
        const index = squareArray.indexOf(e.target) // wherever is clicked, will select the index of the squareArray and this has been assigned to index
        playerDisplay.innerHTML = currentPlayer; // whoever currentPlayer is will be displayed in the HTML 
        
        if (currentPlayer === 'PlayerX'){ // if current player is equal to playerX then 
            currentPlayer = 'Player0' // the player will switch turns as it means playerX has played alreay
            squareArray[index].innerHTML ='<i class="far fa-9x fa-circle"></i>' // the square will be filled with a circle to represent Player0 playing 
            
        } else {
            currentPlayer = 'PlayerX'
            squareArray[index].innerHTML ='<i class="fas fa-10x fa-times"></i>' // the square will be filled with a circle to represent PlayerX playing 
        }
    }
})

