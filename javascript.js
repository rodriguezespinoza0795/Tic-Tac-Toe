// define an array for the structure of the game
var game = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

// Check if there is a winner
function checkStatus(user) {
    // vertical
   if (game[0][0] === user && game[1][0] === user && game[2][0] === user) {
       return true
   }
   if (game[1][0] === user && game[1][1] === user && game[1][2] === user) {
       return true
   }
   if (game[2][0] === user && game[2][1] === user && game[2][2] === user) {
       return true
   }
   // horizontal
   if (game[0][0] === user && game[0][1] === user && game[0][2] === user) {
       return true
   }
   if (game[1][0] === user && game[1][1] === user && game[1][2] === user) {
       return true
   }           
   if (game[2][0] === user && game[2][1] === user && game[2][2] === user) {
       return true
   }
    
    // diagonal
    if (game[0][0] === user && game[1][1] === user && game[2][2] === user) {
       return true
   }
   if (game[0][2] === user && game[1][1] === user && game[2][0] === user) {
       return true
   }

   return false
}

// show the winner
function setWinner(user) {
    alert(`Ganó el usuario ${user}`);
    game = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    setBoard()
}

let currentUser = '0'
function selectItem() {
    if (game[this.dataset.row][this.dataset.column] == '') { 
        game[this.dataset.row][this.dataset.column] = currentUser
        setBoard()
        if (checkStatus(currentUser)) {
            setWinner(currentUser)
        }
        currentUser === '0' ? currentUser = 'X' :currentUser = '0'
    }
}


function render({content, row, column}, container) {
    const el = document.createElement('span')
    el.textContent = content
    el.dataset.row = row
    el.dataset.column = column
    el.addEventListener('click', selectItem)
    container.append(el)
}

// 
function setBoard() {
    container.innerHTML = ''
    game.forEach((row, indexRow) => {
        row.forEach((column, indexColumn)=> {
            render({
                content:column,
                row: indexRow,
                column: indexColumn
            }, window.container)
        })
    })
}

setBoard()
