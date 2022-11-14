const storeXO = ['','','','','','','','','']
let k =0
const mainBody = document.querySelector('body')
const playerTurn = document.createElement('p')
playerTurn.textContent = "Player 1 turn:"
mainBody.append(playerTurn)
let currentPlayer = 'X'
        const X0 = document.querySelector('.cell0')
        X0.addEventListener('click', cell0)
            // X0.textContent = 'X'
            // storeXO[0] = 'X'
        function cell0() {
            if (currentPlayer === 'X') {
                X0.textContent = currentPlayer
                storeXO[0] = currentPlayer
                playerTurn.textContent = "Player 2 turn:"
                mainBody.append(playerTurn)
                currentPlayer = 'O'
                X0.removeEventListener('click', cell0)
            } else {
                X0.textContent = currentPlayer
                storeXO[0]= currentPlayer
                playerTurn.textContent = "Player 1 turn:"
                mainBody.append(playerTurn)
                currentPlayer  = 'X'
                X0.removeEventListener('click', cell0)
            }
            if (storeXO[0] === 'X' && storeXO[1] === 'X' && storeXO[2] === 'X' || storeXO[3] === 'X' && storeXO[4] === 'X' && storeXO[5] === 'X' || storeXO[6] === 'X' && storeXO[7] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if(storeXO[0] === 'X' && storeXO[3] === 'X' && storeXO[6] === 'X' || storeXO[1] === 'X' && storeXO[4] === 'X' && storeXO[7] === 'X' || storeXO[2] === 'X' && storeXO[5] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'X' && storeXO[4] === 'X' && storeXO[8] === 'X' || storeXO[2] === 'X' && storeXO[4] === 'X' && storeXO[6] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[1] === 'O' && storeXO[2] === 'O' || storeXO[3] === 'O' && storeXO[4] === 'O' && storeXO[5] === 'O' || storeXO[6] === 'O' && storeXO[7] === '0' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[3] === 'O' && storeXO[6] === 'O' || storeXO[1] === 'O' && storeXO[4] === 'O' && storeXO[7] === 'O' || storeXO[2] === 'O' && storeXO[5] === 'O' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[4] === 'O' && storeXO[8] === 'O' || storeXO[2] === 'O' && storeXO[4] === 'O' && storeXO[6] === 'O') {
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else {
                k+=1
                if (k===9) {
                    playerTurn.innerText = 'It is a tie game!!'
                    mainBody.append(playerTurn)
                }
            }
        }
        
        const X1 = document.querySelector('.cell1')
        X1.addEventListener('click', cell1)
        function cell1 () {    
            if (currentPlayer === 'X') {
                X1.textContent = currentPlayer
                storeXO[1] = currentPlayer
                playerTurn.textContent = "Player 2 turn:"
                mainBody.append(playerTurn)
                currentPlayer = 'O'
                X1.removeEventListener('click', cell1)
            } else {
                X1.textContent = currentPlayer
                storeXO[1]= currentPlayer
                playerTurn.textContent = "Player 1 turn:"
                mainBody.append(playerTurn)
                currentPlayer  = 'X'
                X1.removeEventListener('clicl', cell1)
            }
            if (storeXO[0] === 'X' && storeXO[1] === 'X' && storeXO[2] === 'X' || storeXO[3] === 'X' && storeXO[4] === 'X' && storeXO[5] === 'X' || storeXO[6] === 'X' && storeXO[7] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if(storeXO[0] === 'X' && storeXO[3] === 'X' && storeXO[6] === 'X' || storeXO[1] === 'X' && storeXO[4] === 'X' && storeXO[7] === 'X' || storeXO[2] === 'X' && storeXO[5] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'X' && storeXO[4] === 'X' && storeXO[8] === 'X' || storeXO[2] === 'X' && storeXO[4] === 'X' && storeXO[6] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[1] === 'O' && storeXO[2] === 'O' || storeXO[3] === 'O' && storeXO[4] === 'O' && storeXO[5] === 'O' || storeXO[6] === 'O' && storeXO[7] === '0' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[3] === 'O' && storeXO[6] === 'O' || storeXO[1] === 'O' && storeXO[4] === 'O' && storeXO[7] === 'O' || storeXO[2] === 'O' && storeXO[5] === 'O' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[4] === 'O' && storeXO[8] === 'O' || storeXO[2] === 'O' && storeXO[4] === 'O' && storeXO[6] === 'O') {
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else {
                k+=1
                if (k===9) {
                    playerTurn.innerText = 'It is a tie game!!'
                mainBody.append(playerTurn)
                }
            }
        }

        const X2 = document.querySelector('.cell2')
        X2.addEventListener('click', cell2)
        function cell2 () {    
            if (currentPlayer === 'X') {
                X2.textContent = currentPlayer
                storeXO[2] = currentPlayer
                playerTurn.textContent = "Player 2 turn:"
                mainBody.append(playerTurn)
                currentPlayer = 'O'
                X2.removeEventListener('click', cell2)
            } else {
                X2.textContent = currentPlayer
                storeXO[2]= currentPlayer
                playerTurn.textContent = "Player 1 turn:"
                mainBody.append(playerTurn)
                currentPlayer  = 'X'
                X2.removeEventListener('click', cell2)
            }
            if (storeXO[0] === 'X' && storeXO[1] === 'X' && storeXO[2] === 'X' || storeXO[3] === 'X' && storeXO[4] === 'X' && storeXO[5] === 'X' || storeXO[6] === 'X' && storeXO[7] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if(storeXO[0] === 'X' && storeXO[3] === 'X' && storeXO[6] === 'X' || storeXO[1] === 'X' && storeXO[4] === 'X' && storeXO[7] === 'X' || storeXO[2] === 'X' && storeXO[5] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'X' && storeXO[4] === 'X' && storeXO[8] === 'X' || storeXO[2] === 'X' && storeXO[4] === 'X' && storeXO[6] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[1] === 'O' && storeXO[2] === 'O' || storeXO[3] === 'O' && storeXO[4] === 'O' && storeXO[5] === 'O' || storeXO[6] === 'O' && storeXO[7] === '0' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[3] === 'O' && storeXO[6] === 'O' || storeXO[1] === 'O' && storeXO[4] === 'O' && storeXO[7] === 'O' || storeXO[2] === 'O' && storeXO[5] === 'O' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[4] === 'O' && storeXO[8] === 'O' || storeXO[2] === 'O' && storeXO[4] === 'O' && storeXO[6] === 'O') {
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else {
                k+=1
                if (k===9) {
                    playerTurn.innerText = 'It is a tie game!!'
                    mainBody.append(playerTurn)
                }
            }
        }

        const X3 = document.querySelector('.cell3')
        X3.addEventListener('click', cell3)
        function cell3 () {    
            if (currentPlayer === 'X') {
                X3.textContent = currentPlayer
                storeXO[3] = currentPlayer
                playerTurn.textContent = "Player 2 turn:"
                mainBody.append(playerTurn)
                currentPlayer = 'O'
                X3.removeEventListener('click', cell3)
            } else {
                X3.textContent = currentPlayer
                storeXO[3]= currentPlayer
                playerTurn.textContent = "Player 1 turn:"
                mainBody.append(playerTurn)
                currentPlayer  = 'X'
                X3.removeEventListener('click', cell3)
            }
            if (storeXO[0] === 'X' && storeXO[1] === 'X' && storeXO[2] === 'X' || storeXO[3] === 'X' && storeXO[4] === 'X' && storeXO[5] === 'X' || storeXO[6] === 'X' && storeXO[7] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if(storeXO[0] === 'X' && storeXO[3] === 'X' && storeXO[6] === 'X' || storeXO[1] === 'X' && storeXO[4] === 'X' && storeXO[7] === 'X' || storeXO[2] === 'X' && storeXO[5] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'X' && storeXO[4] === 'X' && storeXO[8] === 'X' || storeXO[2] === 'X' && storeXO[4] === 'X' && storeXO[6] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[1] === 'O' && storeXO[2] === 'O' || storeXO[3] === 'O' && storeXO[4] === 'O' && storeXO[5] === 'O' || storeXO[6] === 'O' && storeXO[7] === '0' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[3] === 'O' && storeXO[6] === 'O' || storeXO[1] === 'O' && storeXO[4] === 'O' && storeXO[7] === 'O' || storeXO[2] === 'O' && storeXO[5] === 'O' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[4] === 'O' && storeXO[8] === 'O' || storeXO[2] === 'O' && storeXO[4] === 'O' && storeXO[6] === 'O') {
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else {
                k+=1
                if (k===9) {
                    playerTurn.innerText = 'It is a tie game!!'
                    mainBody.append(playerTurn)
                }
            }
        }

        const X4 = document.querySelector('.cell4')
        X4.addEventListener('click', cell4)
        function cell4 () {    
            if (currentPlayer === 'X') {
                X4.textContent = currentPlayer
                storeXO[4] = currentPlayer
                playerTurn.textContent = "Player 2 turn:"
                mainBody.append(playerTurn)
                currentPlayer = 'O'
                X4.removeEventListener('click', cell4)
            } else {
                X4.textContent = currentPlayer
                storeXO[4]= currentPlayer
                playerTurn.textContent = "Player 1 turn:"
                mainBody.append(playerTurn)
                currentPlayer  = 'X'
                X4.removeEventListener('click', cell4)
            }
            if (storeXO[0] === 'X' && storeXO[1] === 'X' && storeXO[2] === 'X' || storeXO[3] === 'X' && storeXO[4] === 'X' && storeXO[5] === 'X' || storeXO[6] === 'X' && storeXO[7] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if(storeXO[0] === 'X' && storeXO[3] === 'X' && storeXO[6] === 'X' || storeXO[1] === 'X' && storeXO[4] === 'X' && storeXO[7] === 'X' || storeXO[2] === 'X' && storeXO[5] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'X' && storeXO[4] === 'X' && storeXO[8] === 'X' || storeXO[2] === 'X' && storeXO[4] === 'X' && storeXO[6] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[1] === 'O' && storeXO[2] === 'O' || storeXO[3] === 'O' && storeXO[4] === 'O' && storeXO[5] === 'O' || storeXO[6] === 'O' && storeXO[7] === '0' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[3] === 'O' && storeXO[6] === 'O' || storeXO[1] === 'O' && storeXO[4] === 'O' && storeXO[7] === 'O' || storeXO[2] === 'O' && storeXO[5] === 'O' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[4] === 'O' && storeXO[8] === 'O' || storeXO[2] === 'O' && storeXO[4] === 'O' && storeXO[6] === 'O') {
                playerTurn.innerText = 'Player 12wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else {
                k+=1
                if (k===9) {
                    playerTurn.innerText = 'It is a tie game!!'
                    mainBody.append(playerTurn)
                }
            }
        }

        const X5 = document.querySelector('.cell5')
        X5.addEventListener('click', cell5)
        function cell5 () {    
            if (currentPlayer === 'X') {
                X5.textContent = currentPlayer
                storeXO[5] = currentPlayer
                playerTurn.textContent = "Player 2 turn:"
                mainBody.append(playerTurn)
                currentPlayer = 'O'
                X5.removeEventListener('click', cell5)
            } else {
                X5.textContent = currentPlayer
                storeXO[5]= currentPlayer
                playerTurn.textContent = "Player 1 turn:"
                mainBody.append(playerTurn)
                currentPlayer  = 'X'
                X5.removeEventListener('click', cell5)
            }
            if (storeXO[0] === 'X' && storeXO[1] === 'X' && storeXO[2] === 'X' || storeXO[3] === 'X' && storeXO[4] === 'X' && storeXO[5] === 'X' || storeXO[6] === 'X' && storeXO[7] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if(storeXO[0] === 'X' && storeXO[3] === 'X' && storeXO[6] === 'X' || storeXO[1] === 'X' && storeXO[4] === 'X' && storeXO[7] === 'X' || storeXO[2] === 'X' && storeXO[5] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'X' && storeXO[4] === 'X' && storeXO[8] === 'X' || storeXO[2] === 'X' && storeXO[4] === 'X' && storeXO[6] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[1] === 'O' && storeXO[2] === 'O' || storeXO[3] === 'O' && storeXO[4] === 'O' && storeXO[5] === 'O' || storeXO[6] === 'O' && storeXO[7] === '0' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[3] === 'O' && storeXO[6] === 'O' || storeXO[1] === 'O' && storeXO[4] === 'O' && storeXO[7] === 'O' || storeXO[2] === 'O' && storeXO[5] === 'O' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[4] === 'O' && storeXO[8] === 'O' || storeXO[2] === 'O' && storeXO[4] === 'O' && storeXO[6] === 'O') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else {
                k+=1
                if (k===9) {
                    playerTurn.innerText = 'It is a tie game!!'
                    mainBody.append(playerTurn)
                }
            }
        }
        
        const X6 = document.querySelector('.cell6')
        X6.addEventListener('click', cell6)
        function cell6 () {    
            if (currentPlayer === 'X') {
                X6.textContent = currentPlayer
                storeXO[6] = currentPlayer
                playerTurn.textContent = "Player 2 turn:"
                mainBody.append(playerTurn)
                currentPlayer = 'O'
                X6.removeEventListener('click', cell6)
            } else {
                X6.textContent = currentPlayer
                storeXO[6]= currentPlayer
                playerTurn.textContent = "Player 1 turn:"
                mainBody.append(playerTurn)
                currentPlayer  = 'X'
                X6.removeEventListener('click', cell6)
            }
            if (storeXO[0] === 'X' && storeXO[1] === 'X' && storeXO[2] === 'X' || storeXO[3] === 'X' && storeXO[4] === 'X' && storeXO[5] === 'X' || storeXO[6] === 'X' && storeXO[7] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if(storeXO[0] === 'X' && storeXO[3] === 'X' && storeXO[6] === 'X' || storeXO[1] === 'X' && storeXO[4] === 'X' && storeXO[7] === 'X' || storeXO[2] === 'X' && storeXO[5] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'X' && storeXO[4] === 'X' && storeXO[8] === 'X' || storeXO[2] === 'X' && storeXO[4] === 'X' && storeXO[6] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[1] === 'O' && storeXO[2] === 'O' || storeXO[3] === 'O' && storeXO[4] === 'O' && storeXO[5] === 'O' || storeXO[6] === 'O' && storeXO[7] === '0' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[3] === 'O' && storeXO[6] === 'O' || storeXO[1] === 'O' && storeXO[4] === 'O' && storeXO[7] === 'O' || storeXO[2] === 'O' && storeXO[5] === 'O' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[4] === 'O' && storeXO[8] === 'O' || storeXO[2] === 'O' && storeXO[4] === 'O' && storeXO[6] === 'O') {
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X7.removeEventListener('click', cell7)
                X8.removeEventListener('click', cell8)
            } else {
                k+=1
                if (k===9) {
                    playerTurn.innerText = 'It is a tie game!!'
                    mainBody.append(playerTurn)
                }
            }
        }

        const X7 = document.querySelector('.cell7')
        X7.addEventListener('click', cell7)
        function cell7 () {
            if (currentPlayer === 'X') {
                X7.textContent = currentPlayer
                storeXO[7] = currentPlayer
                playerTurn.textContent = "Player 2 turn:"
                mainBody.append(playerTurn)
                currentPlayer = 'O'
                X7.removeEventListener('click', cell7)
            } else {
                X7.textContent = currentPlayer
                storeXO[7]= currentPlayer
                playerTurn.textContent = "Player 1 turn:"
                mainBody.append(playerTurn)
                currentPlayer  = 'X'
                X7.removeEventListener('click', cell7)
            }
            if (storeXO[0] === 'X' && storeXO[1] === 'X' && storeXO[2] === 'X' || storeXO[3] === 'X' && storeXO[4] === 'X' && storeXO[5] === 'X' || storeXO[6] === 'X' && storeXO[7] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X8.removeEventListener('click', cell8)
            } else if(storeXO[0] === 'X' && storeXO[3] === 'X' && storeXO[6] === 'X' || storeXO[1] === 'X' && storeXO[4] === 'X' && storeXO[7] === 'X' || storeXO[2] === 'X' && storeXO[5] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'X' && storeXO[4] === 'X' && storeXO[8] === 'X' || storeXO[2] === 'X' && storeXO[4] === 'X' && storeXO[6] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[1] === 'O' && storeXO[2] === 'O' || storeXO[3] === 'O' && storeXO[4] === 'O' && storeXO[5] === 'O' || storeXO[6] === 'O' && storeXO[7] === '0' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[3] === 'O' && storeXO[6] === 'O' || storeXO[1] === 'O' && storeXO[4] === 'O' && storeXO[7] === 'O' || storeXO[2] === 'O' && storeXO[5] === 'O' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X8.removeEventListener('click', cell8)
            } else if (storeXO[0] === 'O' && storeXO[4] === 'O' && storeXO[8] === 'O' || storeXO[2] === 'O' && storeXO[4] === 'O' && storeXO[6] === 'O') {
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X8.removeEventListener('click', cell8)
            } else {
                k+=1
                if (k===9) {
                    playerTurn.innerText = 'It is a tie game!!'
                    mainBody.append(playerTurn)
                }
            }
        }

        const X8 = document.querySelector('.cell8')
        X8.addEventListener('click', cell8)
        function cell8 () {    
            if (currentPlayer === 'X') {
                X8.textContent = currentPlayer
                storeXO[8] = currentPlayer
                playerTurn.textContent = "Player 2 turn:"
                mainBody.append(playerTurn)
                currentPlayer = 'O'
                X8.removeEventListener('click', cell8)
            } else {
                X8.textContent = currentPlayer
                storeXO[8]= currentPlayer
                playerTurn.textContent = "Player 1 turn:"
                mainBody.append(playerTurn)
                currentPlayer  = 'X'
                X8.removeEventListener('click', cell8)
            }
            if (storeXO[0] === 'X' && storeXO[1] === 'X' && storeXO[2] === 'X' || storeXO[3] === 'X' && storeXO[4] === 'X' && storeXO[5] === 'X' || storeXO[6] === 'X' && storeXO[7] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
            } else if(storeXO[0] === 'X' && storeXO[3] === 'X' && storeXO[6] === 'X' || storeXO[1] === 'X' && storeXO[4] === 'X' && storeXO[7] === 'X' || storeXO[2] === 'X' && storeXO[5] === 'X' && storeXO[8] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
            } else if (storeXO[0] === 'X' && storeXO[4] === 'X' && storeXO[8] === 'X' || storeXO[2] === 'X' && storeXO[4] === 'X' && storeXO[6] === 'X') {
                playerTurn.innerText = 'Player 1 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
            } else if (storeXO[0] === 'O' && storeXO[1] === 'O' && storeXO[2] === 'O' || storeXO[3] === 'O' && storeXO[4] === 'O' && storeXO[5] === 'O' || storeXO[6] === 'O' && storeXO[7] === '0' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
            } else if (storeXO[0] === 'O' && storeXO[3] === 'O' && storeXO[6] === 'O' || storeXO[1] === 'O' && storeXO[4] === 'O' && storeXO[7] === 'O' || storeXO[2] === 'O' && storeXO[5] === 'O' && storeXO[8] === 'O'){
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
            } else if (storeXO[0] === 'O' && storeXO[4] === 'O' && storeXO[8] === 'O' || storeXO[2] === 'O' && storeXO[4] === 'O' && storeXO[6] === 'O') {
                playerTurn.innerText = 'Player 2 wins!!'
                mainBody.append(playerTurn)
                X1.removeEventListener('click', cell1)
                X0.removeEventListener('click', cell0)
                X2.removeEventListener('click', cell2)
                X3.removeEventListener('click', cell3)
                X4.removeEventListener('click', cell4)
                X5.removeEventListener('click', cell5)
                X6.removeEventListener('click', cell6)
                X7.removeEventListener('click', cell7)
            } else {
                k+=1
                if (k===9) {
                    playerTurn.innerText = 'It is a tie game!!'
                    mainBody.append(playerTurn)
                }
            }
        }

     const resetBtn = document.querySelector('#btn')
     resetBtn.addEventListener('click', ()=>{
        playerTurn.textContent = null
        mainBody.append(playerTurn)
     })
        
  

