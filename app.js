document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.box')
    const playerDisplay = document.querySelector('#playerDisplay')

    let currentPlayer = 'PlayerX'

    squares.forEach(square =>{
        square.addEventListener('click', clickOutcome)
    })
    function clickOutcome(e){
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer;
        
        if (currentPlayer === 'PlayerX'){
            currentPlayer = 'Player0'
            squareArray[index].innerHTML ='<i class="far fa-9x fa-circle"></i>'
            
        } else {
            currentPlayer = 'PlayerX'
            squareArray[index].innerHTML ='<i class="fas fa-10x fa-times"></i>'
        }
    }
})

